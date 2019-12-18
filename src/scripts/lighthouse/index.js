const lighthouse = require('lighthouse');
const spawn = require('cross-spawn')
const chromeLauncher = require('chrome-launcher');
const lighthouseConfig = require('./lighthouse-config')
const path = require('path')
const fs = require('fs')

const [executor, ignoredBin, script, ...args] = process.argv

const useBuiltinConfig = true;
const config = useBuiltinConfig
  ? ['--config', lighthouseConfig]
  : []

const result = spawn.sync(
  resolveBin('lighthouse'),
  [...config, ...args, '--chrome-flags="--headless"'],
  {stdio: 'inherit'},
)

// eslint-disable-next-line complexity
function resolveBin(modName, {executable = modName, cwd = process.cwd()} = {}) {
  let pathFromWhich
  try {
    pathFromWhich = fs.realpathSync(which.sync(executable))
    if (pathFromWhich && pathFromWhich.includes('.CMD')) return pathFromWhich
  } catch (_error) {
    // ignore _error
  }
  try {
    const modPkgPath = require.resolve(`${modName}/package.json`)
    const modPkgDir = path.dirname(modPkgPath)
    const {bin} = require(modPkgPath)
    const binPath = typeof bin === 'string' ? bin : bin[executable]
    const fullPathToBin = path.join(modPkgDir, binPath)
    if (fullPathToBin === pathFromWhich) {
      return executable
    }
    return fullPathToBin.replace(cwd, '.')
  } catch (error) {
    if (pathFromWhich) {
      return executable
    }
    throw error
  }
}