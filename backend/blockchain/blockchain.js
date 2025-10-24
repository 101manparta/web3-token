const { ethers } = require("ethers");
const dotenv = require("dotenv");
const contractABI = require("./contractABI.json");

dotenv.config();

const provider = new ethers.JsonRpcProvider(process.env.INFURA_API);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractAddress = process.env.CONTRACT_ADDRESS;

const contract = new ethers.Contract(contractAddress, contractABI, wallet);

async function registerDNA(ipfsHash) {
  const tx = await contract.registerDNA(ipfsHash);
  await tx.wait();
  console.log("✅ DNA Registered on Blockchain:", ipfsHash);
  return tx.hash;
}

module.exports = { registerDNA };
