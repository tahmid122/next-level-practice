const path = require("path");

console.log("Current file Info:  \n");
console.log("filename: ,", __filename);
console.log("Directory: ", __dirname);

console.log("\n" + "-".repeat(50) + "\n");

const filePath = "/tahmid/documents/nextLevel.pdf";

console.log("Analyzing Path : ", filePath, "\n");

console.log("Directory  : ", path.dirname(filePath));
console.log("Basename: ", path.basename(filePath));
console.log("File extension: ", path.extname(filePath));
console.log("File name: ", path.basename(filePath, path.extname(filePath)));

const parsedPath = path.parse(filePath);
console.log(parsedPath);

console.log("Formatted Path: ", path.format(parsedPath));
