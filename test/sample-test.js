const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SoulboundToken", function () {
  it("Should deploy the SoulboundToken contract", async function () {
    const ERC4973 = await ethers.getContractFactory("ERC4973");
    const erc4973 = await ERC4973.deploy("SoulboundToken","SBT");
    await erc4973.deployed();
    expect(await erc4973.symbol()).to.equal("SBT");
  });
});
