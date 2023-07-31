const { ethers } = require("hardhat");
const Soldier= require("../artifacts/contracts/Soldier.sol/Soldier.json");
require("dotenv").config();

async function main() {
  const polygonContract = ""
  const BraveSoldier = await ethers.getContractAt(
    Soldier.abi,
    polygonContract
  );

  console.log(
    "Balance : ",
    (await BraveSoldier.balanceOf(process.env.PUBLIC_KEY)).toString()
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
