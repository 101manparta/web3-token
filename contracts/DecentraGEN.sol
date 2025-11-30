// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DecentraToken {
    string public name = "Decentra Token";
    string public symbol = "DGN";
    uint256 public totalSupply = 1000000;

    mapping(address => uint256) public balanceOf;

    constructor() {
        balanceOf[msg.sender] = totalSupply;
    }
}
