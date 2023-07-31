const { ethers } = require("hardhat");
const Soldier = require("../artifacts/contracts/Soldier.sol/Soldier.json");

async function main() {
  const contractAddress="0x9b13D570E715EEEce793Ec664f978a8f62873143"
  const BraveSoldier = await ethers.getContractAt(Soldier.abi, contractAddress);

  const prompt = await BraveSoldier.promptDescription();
  console.log("My NFT Prompt : ", prompt + "");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
