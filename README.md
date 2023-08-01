### Project
THIS IS THE POLYGON MODULE 1 PROJECT

### Installation and Execution
  1. FirstLy we have forked and clone my repository.
  2. After that i have run the  **npm i** command.
  3. Add have added environment variables in .env file.
  4.  After that i have Run **npx hardhat compile**
  5. **npx hardhat run scripts/deploy.js ---network goerli** will deploy your ERC721A contract to goerli testnet.
  6. The deployed contract address will get written in contractAddress.js
  7. **npx hardhat run scripts/NftMint.js --network goerli** to mint all the nft
  8. **npx hardhat run scripts/approveDeposit.js --network goerli** to approve and deposit transaction on polygon via fxportal bridge
  9. Wait for 22 to 30 min for this to approve and deposit on polygon.
  10. **npx hardhat run scripts/Myprompt.js --network goerli** to get the prompt description and other information about the NFT.
  11. **npx hardhat run scripts/Getbalance.js --network mumbai** to get the balance of deployed tokens.
  12. Done

### Tools Used
  * ERC721A
  * solidity
  * hardhat
  * pinata



### [Polyscan link](https://mumbai.polygonscan.com/token/0x59f0bd0b4db11017591a47a314f1d0da79f8cd12?a=0xbe983FF21bED77f617B5782617E6885C32E5388e)




