function throttle(fn, interval) {
  let lastTime = 0;
  function _throttle() {
    const nowTime = new Date().getTime();
    const remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      fn();
      lastTime = nowTime;
    }
  }
  return _throttle;
}

// 功能测试
const inputEle = document.querySelector("#throttle");
const inputThrottlr = function () {
  console.log("防抖操作触发");
};
inputEle.oninput = throttle(inputThrottlr, 2000);
