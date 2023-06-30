const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

const AMOUNT = ethers.utils.parseEther("0.02")
async function getWeth() {
    const { deployer } = await getNamedAccounts()
    const iWeth = await ethers.getContractAt(
        "IWeth",
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        deployer
    )

    const tx = await iWeth.deposit({ value: AMOUNT }) // We are deposite are ethers or WEth at this 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
    const wetbalace = await iWeth.balanceOf(deployer)
    console.log(`Got ${wetbalace.toString()} WETH`)
}

module.exports = { getWeth, AMOUNT }
