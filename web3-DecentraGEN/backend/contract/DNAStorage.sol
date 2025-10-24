// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DNAStorage {
    struct DNAData {
        string ipfsHash;
        address owner;
        mapping(address => bool) accessList;
    }

    mapping(string => DNAData) private dnaRecords;

    event DNARegistered(string ipfsHash, address indexed owner);
    event AccessGranted(string ipfsHash, address indexed user);
    event AccessRevoked(string ipfsHash, address indexed user);

    function registerDNA(string memory _ipfsHash) public {
        DNAData storage dna = dnaRecords[_ipfsHash];
        dna.ipfsHash = _ipfsHash;
        dna.owner = msg.sender;
        emit DNARegistered(_ipfsHash, msg.sender);
    }

    function grantAccess(string memory _ipfsHash, address _user) public {
        DNAData storage dna = dnaRecords[_ipfsHash];
        require(msg.sender == dna.owner, "Not owner");
        dna.accessList[_user] = true;
        emit AccessGranted(_ipfsHash, _user);
    }

    function revokeAccess(string memory _ipfsHash, address _user) public {
        DNAData storage dna = dnaRecords[_ipfsHash];
        require(msg.sender == dna.owner, "Not owner");
        dna.accessList[_user] = false;
        emit AccessRevoked(_ipfsHash, _user);
    }

    function hasAccess(string memory _ipfsHash, address _user) public view returns (bool) {
        DNAData storage dna = dnaRecords[_ipfsHash];
        return dna.accessList[_user];
    }
}
