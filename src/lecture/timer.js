const timeout = setTimeout(() => {
    console.log("1.5초 후 실행");
}, 1500);

const clearedTimeout = setTimeout(() => {
    console.log("실행되지 않습니다.");
}, 3000);

const interval = setInterval(() => {
    console.log("1초마다 실행");
}, 1000);

setTimeout(() => {
    clearTimeout(clearedTimeout);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
    console.log("즉시 실행");
});

const clearedImmediate = setImmediate(() => {
    console.log("실행되지 않습니다.");
});

clearImmediate(clearedImmediate);