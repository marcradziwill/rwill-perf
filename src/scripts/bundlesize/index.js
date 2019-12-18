
const spawn = require('cross-spawn')
const {resolveBin } = require('../utils')
const bundlesizeBuiltinConfig = require('./bundlesize.config')

const [executor, ignoredBin, script, ...args] = process.argv

const useBuiltinConfig = true;

console.log('read from package json')

// const config = useBuiltinConfig

//   ? ['--config', 'src/scripts/bundlesize/bundlesize.config.json']
//   : []

//   console.log(config);
// const result = spawn.sync(
//   resolveBin('bundlesize'),
//   [...config, ...args],
//   {stdio: 'inherit'},
// )

