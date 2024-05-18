async function main() {
    const MyContract = await ethers.getContractFactory("MyContract");
    console.log("Deploying MyContract...");
    const myContract = await MyContract.deploy();
    console.log("MyContract deployed to:", myContract.target);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  