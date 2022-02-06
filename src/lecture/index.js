const { odd, even } = require("./var");
const checkNumber = require("./func");
// import { odd, even } from "./var";
// import checkNumber from "./func";

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));