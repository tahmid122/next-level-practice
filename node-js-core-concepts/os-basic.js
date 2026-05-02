const os = require("os");

console.log("System info \n");
console.log("-".repeat(50));

console.log("Platform Details: ");
console.log("Platform: ", os.platform());
console.log("Architecture: ", os.arch());
console.log("OS type: ", os.type());
console.log("OS Released: ", os.release());
console.log("Hostname: ", os.hostname());

console.log("\nCPU info: ");
const cpus = os.cpus();
console.log("CPU model: ", cpus[0].model);
console.log("CPU cores: ", cpus.length);
console.log("CPU speed: ", cpus[0].speed);

console.log("-".repeat(50));

const totalMem = os.totalmem();
const freeMem = os.freemem();
console.log("Total Memory: ", (totalMem / 1024 / 1024 / 1024).toFixed(2));
console.log("Free Memory: ", (freeMem / 1024 / 1024 / 1024).toFixed(2));

console.log("-".repeat(50));

const upTime = os.uptime();
const days = Math.floor(upTime / 86400);
const hours = Math.floor((upTime % 86400) / 3600);
const minutes = Math.floor((upTime % 3600) / 60);
console.log(
  `${upTime} seconds (${days} days, ${hours} hours, ${minutes} minutes)`,
);
