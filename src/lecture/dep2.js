var dep1 = require("./dep1");

console.log(dep1); // 순환 참조 감지 시 빈 객체로 변경

module.exports = {
    output: "dep2"
};