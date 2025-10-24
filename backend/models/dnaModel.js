const mongoose = require("mongoose");

const dnaSchema = new mongoose.Schema({
  filename: String,
  filepath: String,
  ipfsHash: String,
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("DNAFile", dnaSchema);
