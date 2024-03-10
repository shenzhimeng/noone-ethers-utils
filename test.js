var ethersUtils = require('./index.js');

console.log(ethersUtils.parseGwei("1").toString())

console.log(ethersUtils.formatGwei(9))

console.log(ethersUtils.fromHex(97788))

console.log(ethersUtils.toHex(11))