const fs = require("fs");
fs.writeFileSync("./output/temp.text", "This is a temp file");
console.log("File created");
if (fs.existsSync("./output/temp.text")) {
  console.log("File exists!!");
  fs.unlinkSync("./output/temp.text");
  console.log("File deleted");
} else {
  console.log("File not exits");
}

try {
  fs.unlinkSync("./output/temp.txt");
} catch (error) {
  console.log(error.message);
}

fs.writeFile("./output/temp2.txt", "This is temp 2 file", (error) => {
  if (error) return console.log(error);
  console.log("another temp file created");
  fs.unlink("./output/temp2.txt", (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Temp2 deleted");
    }
  });
});
