<<<<<<< HEAD
import { stat } from "fs/promises";

const stats = await  stat("read.md");

console.log("is file:",stats.isFile());
console.log("is directory:", stats.isDirectory());
console.log("size (bytes):", stats.size);
=======
import { stat } from "fs/promises";

const stats = await  stat("read.md");

console.log("is file:",stats.isFile());
console.log("is directory:", stats.isDirectory());
console.log("size (bytes):", stats.size);
>>>>>>> 2037ef7 (add main)
console.log("Last modified", stats.mtime);