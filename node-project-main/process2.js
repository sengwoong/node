const { nextTick } = require("process");
const os = require("os");
console.log("start");

setTimeout(() => {
  console.log("timeout callback");
}, 0);

nextTick(() => {
  console.log("nextTick callback");
});
console.log(os.cpus().length);

// 콘솔창 출력 순서
// start
// end
// nextTick callback
// timeout callback
