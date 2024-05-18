const { expect } = require("chai");

describe("MyContract", function() {
  it("Should set the greeting correctly", async function() {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy();

    expect(await myContract.greeting()).to.equal("Hello, World!");

    await myContract.setGreeting("Bonjour");
    expect(await myContract.greeting()).to.equal("Bonjour");

    expect(await myContract.getGreeting()).to.equal("Bonjour");
  });
});
