const { ethers } = require("hardhat");
const Soldier= require("../artifacts/contracts/Soldier.sol/Soldier.json");
const FxRootAbi = require("../FxRootContractABI.json");
require('dotenv').config()



async function main() {
  // same as nftMint
  const contractAddress="0x9b13D570E715EEEce793Ec664f978a8f62873143"
  const BraveSoldier = await ethers.getContractAt(
    Soldier.abi,
    contractAddress
  );

  const fxRootContract = await ethers.getContractAt(
    FxRootAbi,
    "0xF9bc4a80464E48369303196645e876c8C7D972de"
  );

  const supply = 5;
  for (let id = 0; id < supply; id++) {
    let approval = await BraveSoldier.approve(
      "0xF9bc4a80464E48369303196645e876c8C7D972de",
       id
    );

    await approval
    .wait();

    let deposit = await fxRootContract.deposit(
      contractAddress,
      process.env.PUBLIC_KEY,
      id,
      "0x6566"
    );

    await deposit.wait();
  }
  console.log(`Approval and deposition of ${supply} NFT confirmed`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
