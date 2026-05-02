const crypto = require("crypto");

console.log("\n MD5 Hash: ");

const md5Hash = crypto.createHash("md5").update("password123").digest("hex"); //not recommended
const md5Hash2 = crypto.createHash("md5").update("password123").digest("hex"); //not recommended

console.log("Input: password123");
console.log("MD5 Hashed Password:  ", md5Hash);
console.log("MD5 Hashed 2 : ", md5Hash2);

const sha256Hash = crypto
  .createHash("sha256")
  .update("password123")
  .digest("hex");

console.log("Input Sha: password123");
console.log("Sha Hashed Password:  ", sha256Hash);

const sha512Hash = crypto
  .createHash("sha512")
  .update("password123")
  .digest("hex");

console.log("Input Sha512: password123");
console.log("Sha512 Hashed Password:  ", sha256Hash);
