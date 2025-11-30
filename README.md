# Web3 Token Project

Simple Hardhat project to deploy and interact with a basic ERC20 Token contract on a local blockchain.

---

## Prasyarat

- Node.js (versi 16 ke atas direkomendasikan)
- npm atau yarn
- Hardhat (`npx hardhat`)
- Git (untuk versi kontrol)

---

## Setup Project

1. **Clone repository**

git clone https://github.com/username/repo-web3.git
cd repo-web3
Install dependencies

bash
Copy code
npm install
Compile kontrak

bash
Copy code
npx hardhat compile
Menjalankan Local Blockchain
Jalankan Hardhat node untuk simulasi blockchain lokal:

bash
Copy code
npx hardhat node
Node ini akan berjalan di http://127.0.0.1:8545 dengan akun-akun testing yang sudah otomatis tersedia.

Deploy Kontrak
Di terminal baru, deploy kontrak ke network lokal:

bash
Copy code
npx hardhat run scripts/deploy.cjs --network localhost
Output akan menampilkan alamat kontrak yang sudah dideploy.

Interaksi dengan Kontrak
Buka Hardhat console di network lokal:

bash
Copy code
npx hardhat console --network localhost
Contoh kode interaksi:

js
Copy code
const [deployer, addr1] = await ethers.getSigners();
const Token = await ethers.getContractFactory("Token");
const token = await Token.attach("alamat_kontrak_yang_terdeploy");

// Cek balance addr1
let balance = await token.balanceOf(addr1.address);
console.log(balance.toString());

// Transfer token dari deployer ke addr1
await token.transfer(addr1.address, 1000);
console.log("Transfer selesai!");

// Cek balance setelah transfer
balance = await token.balanceOf(addr1.address);
console.log(balance.toString());
Struktur Folder
bash
Copy code
/contracts      # Solidity smart contracts
/scripts       # Skrip deploy dan interaksi
/test          # Test file (jika ada)
/node_modules  # Dependencies (jangan upload ke git)
/hardhat.config.js  # Konfigurasi Hardhat
/package.json  # Dependencies dan script npm
/README.md     # Dokumentasi project ini
.gitignore
Pastikan .gitignore kamu sudah ada dan berisi setidaknya:

bash
Copy code
node_modules/
cache/
artifacts/
.env
Tips
Jangan pernah upload private key atau file .env yang berisi secrets ke GitHub.

Gunakan npm run script yang kamu definisikan di package.json untuk memudahkan perintah.

Selalu jalankan npx hardhat compile setelah ubah kontrak sebelum deploy.


Dokumentasi

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/af47d539-a93c-4098-bdfa-db4389ad6464" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/7e866b27-bc4f-4752-b0d3-a1f6e30c1747" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/47908746-2953-432f-a744-b91fca1421ec" />

<img width="1920" height="1080" alt="Screenshot (261)" src="https://github.com/user-attachments/assets/524c2c1d-a710-4f95-b209-12ba92fc7816" />

<img width="1920" height="1080" alt="Screenshot (261)" src="https://github.com/user-attachments/assets/f553d3d0-0f8e-40e6-a175-1edb41f4ad7a" />




