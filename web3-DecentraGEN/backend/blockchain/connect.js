const fs = require("fs");
const path = require("path");
const ethers = require("ethers");
require("dotenv").config();

// === Provider Sepolia via Infura ===
const INFURA_URL = process.env.INFURA_URL || "https://sepolia.infura.io/v3/bcd050ccafdc4b65998c4934840cd244";
const provider = new ethers.providers.JsonRpcProvider(INFURA_URL);

// === Load ABI kontrak DNAStorage ===
const abiPath = path.join(__dirname, "contractABI.json");
if (!fs.existsSync(abiPath)) {
  console.error("❌ ABI file tidak ditemukan:", abiPath);
  process.exit(1);
}

const abi = JSON.parse(fs.readFileSync(abiPath, "utf8"));

// === Alamat kontrak ===
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || "0xddaAd340b0f1Ef65169Ae5E41A8b10776a75482d";

// === Buat instance kontrak ===
const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);

async function testConnection() {
  try {
    const blockNumber = await provider.getBlockNumber();
    console.log("✅ Terhubung ke Sepolia, block number:", blockNumber);
    console.log("✅ Kontrak siap digunakan di address:", CONTRACT_ADDRESS);

    // 🔹 Contoh panggilan fungsi read-only (opsional)
    // const hasAccess = await contract.hasAccess("Qm123...", "0xYourAddressHere");
    // console.log("User punya akses?", hasAccess);

  } catch (err) {
    console.error("❌ Error saat test koneksi:", err);
  }
}

// Jalankan fungsi utama
testConnection();
