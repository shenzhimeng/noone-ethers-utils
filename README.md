# noone-ethers-utils
ethers.js Integrated utils (base ethers v5.7.2)


## How to install
```bash
npm install noone-ethers-utils
```

## How to use
```javascript
const ethersUtils = require('noone-ethers-utils');

console.log(ethersUtils.parseGwei("1").toString())

console.log(ethersUtils.formatGwei(9))

console.log(ethersUtils.fromHex(97788))

console.log(ethersUtils.toHex(11))
```

more function come soon