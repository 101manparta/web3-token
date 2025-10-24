const { contract } = require("./connect");

async function test() {
  try {
    console.log("📡 Testing blockchain connection...");
    console.log("Contract address:", contract.address);

    // Contoh read: dapatkan jumlah DNA tersimpan (kalau ada fungsi view)
    // const count = await contract.dnaCount();
    // console.log("Jumlah DNA tersimpan:", count);

    console.log("✅ Blockchain connection OK");
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

test();
