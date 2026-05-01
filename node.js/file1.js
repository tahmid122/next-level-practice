const { a } = require("./file2");
const { a: x } = require("./file3");

const { add, sub } = require("./utils");
console.log(add(a, x));
