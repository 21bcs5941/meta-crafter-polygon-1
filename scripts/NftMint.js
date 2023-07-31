const { ethers } = require("hardhat");
const Soldier = require("../artifacts/contracts/Soldier.sol/Soldier.json");

async function main() {
  // paste the contract address from deploy.js
  // commannd : npx hardhat run s+tab/d=TAB --network goerli
  const contractAddress="0x9b13D570E715EEEce793Ec664f978a8f62873143";
  const supply = 5;
  const NFTContract = await ethers.getContractAt(Soldier.abi, contractAddress);
  const txn = await NFTContract.mint(supply);
  await txn.wait();
  console.log(`Successfully minted ${supply} Tokens`);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
