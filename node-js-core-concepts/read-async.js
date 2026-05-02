const fs = require("fs");
console.log("Start Reading...");
fs.readFile("./data/diary.txt", "utf-8", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});

console.log("This runs immediately - no blocking.");
