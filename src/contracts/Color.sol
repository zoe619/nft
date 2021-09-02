pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract Color is ERC721, IERC721Enumerable{

  string[] public colors;
  mapping(string=>bool) _colorExist;
  uint public _totalSupply;

  constructor() ERC721("Color", "CLR"){
      
  }

  function mint(string memory _color) public{
     
      colors.push(_color);
      uint _id = colors.length;
     _mint(msg.sender, _id);
     _colorExist[_color] = true;
     _totalSupply++;

  }
  
    
    function tokenOfOwnerByIndex(address owner, uint256 index) public view override returns (uint256) {
        // You need update this logic.
        // ...
        return 3;
    }

    function totalSupply() external  view override returns (uint256) {
      // You need update this logic.
      // ...
      return _totalSupply;
    }

    function tokenByIndex(uint256 index) external view  override returns (uint256) {
      // You need update this logic.
      // ...
      return 5;
    }
  
}