// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "erc721a/contracts/ERC721A.sol";

contract Soldier is ERC721A {
    uint256 public  MAX_SUPPLY = 5;
    string public baseURI =
        "https://gateway.pinata.cloud/ipfs/QmbA3qiQ291HMuxK5f2N7Pjmvf6rdgQh584Ux9o1GwEF4D";
    address public owner;

    constructor() ERC721A("Brave Soldier", "BSF") {
        owner = msg.sender;
    }
   
    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "You are not the owner"
        );
        _;
    }

    function mint(uint256 quant) external payable onlyOwner {
        uint256 total = totalSupply() + quant;

        if (total > MAX_SUPPLY) {
            revert("Invalid quantity");
        }
        _safeMint(msg.sender, quant);
    }
    
    function promptDescription() external pure returns (string memory) {
        return
            "A brave soldier holding guns in his hands";

    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

}
