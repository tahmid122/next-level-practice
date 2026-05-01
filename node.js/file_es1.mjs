//common js to esm
import { a } from "./file2.js";
import { a as x } from "./file3.js";

import { add, sub } from "./utils/index.js";
console.log(add(a, x));
