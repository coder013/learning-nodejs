var dep2 = require("./dep2");

console.log(dep2); // 순환 참조 감지 시 빈 객체로 변경

module.exports = {
    output: "dep1"
};