function throttle(fn, interval, options = { leading: true, trailing: false }) {
  const { leading, trailing } = options;
  // 此时默认第一次会执行
  let lastTime = 0;
  let timer = null;

  function _throttle(...args) {
    // 当前事件触发的时间
    const nowTime = new Date().getTime();
    // 第一次不触发
    if (!lastTime && !leading) lastTime = nowTime;
    const remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      // 真正触发函数
      fn.apply(args);
      lastTime = nowTime;
      return; // 防止添加额外定时器
    }
    // trailing为true 并且 前面没有定时器才执行
    if (trailing && !timer) {
      setTimeout(() => {
        timer = null;
        lastTime = !leading ? 0 : new Date().getTime(); // 时间重置重点
        fn.apply(this,args);
      }, remainTime);
    }
  }

  // 取消方法
  _throttle.cancle = function(){
    if(timer) clearTimeout(timer)
    timer = null
    lastTime = 0
  }

  return _throttle;
}

// 功能测试
const inputEle = document.querySelector("#throttle");
const inputThrottlr = function () {
  console.log("防抖操作触发");
};
inputEle.oninput = throttle(inputThrottlr, 2000);
