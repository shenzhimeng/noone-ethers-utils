const { ethers, Wallet, utils, BigNumber } = require('ethers')
const baseERC20Abi = require('./json/BASE_ERC20ABI.json')

function parseGwei(gwei) {
    return utils.parseUnits(gwei.toString(), 9);
}

function formatGwei(wei) {
    return utils.formatUnits(wei, 9);
}

function fromHex(hexString) {
    return parseInt(hexString, 16);
}

function toHex(decimalNumber2) {
    return decimalNumber2.toString('16');
}

function isHex(string) {
    const hexRegex = /^[0-9a-fA-F]+$/;
    return hexRegex.test(string);
}

// for use
// {
//     "type":2, 
//     "to":"to",
//     "data":"data",
//     ... setGas(1,0.1)
// }
function setGas(maxFeePerGas, maxPriorityFeePerGas) {
    return {
        maxFeePerGas: parseGwei(maxFeePerGas),
        maxPriorityFeePerGas: parseGwei(maxPriorityFeePerGas)
    };
}

// wallet must connect Provider 
async function getTokenBalance(wallet, tokenAddress) {
    let contract = new ethers.Contract(tokenAddress, baseERC20Abi, wallet);
    let num = await contract.balanceOf(wallet.address);
    return num.toString();
}

// Token must follow ERC20
// wallet must connect Provider 
// amount must parse
async function approveToken(wallet, token, spender, amount) {
    const contract = new ethers.Contract(token, erc20abi, wallet);

    console.log(`approve token:${token} to spender:${spender}`);
    let approveTx = await contract.approve(spender, amount ? amount : ethers.constants.MaxUint256);
    await approveTx.wait();
    console.log("approve success");

    return contract;
}

module.exports.parseEther = utils.parseEther
module.exports.formatEther = utils.formatEther
module.exports.parseGwei = parseGwei
module.exports.formatGwei = formatGwei
module.exports.fromHex = fromHex
module.exports.toHex = toHex
module.exports.isHex = isHex
module.exports.setGas = setGas
module.exports.getTokenBalance = getTokenBalance
module.exports.approveToken = approveToken