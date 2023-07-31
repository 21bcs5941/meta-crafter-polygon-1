const hre = require("hardhat");

const main= async()=> {
  const soldierNft = await hre.ethers.deployContract("Soldier");
  await soldierNft.waitForDeployment();

  console.log("Contract Address : ", await soldierNft.getAddress());
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
