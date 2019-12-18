const lighthouse = require('lighthouse');
const spawn = require('cross-spawn')
const chromeLauncher = require('chrome-launcher');
const lighthouseConfig = require('./lighthouse-config')
const {resolveBin } = require('../utils')

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

