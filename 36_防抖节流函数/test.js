function debounce(fn, delay, immediate = false) {
  // 闭包，定义上一次的定时器
  let timer = null;
  // 实现立即执行
  let isInvoke = false;

  function _debounce(...args) {
    return new Promise((resolve) => {
      // 每次执行前清除定时器
      if (timer) clearTimeout(timer);
      if (immediate && !isInvoke) {
        const result = fn.apply(this, args);
        resolve(result);
        isInvoke = true;
      } else {
        // 执行函数
        timer = setTimeout(() => {
          // 绑定this 参数传递
          const result = fn.apply(this, args);
          resolve(result);
          isInvoke = false;
          timer = null;
        }, delay);
      }
    });
  }

  // 取消功能
  _debounce.cancle = function () {
    if (timer) clearTimeout(timer);
    // 初始化变量
    timer = null;
    isInvoke = false;
  };

  return _debounce;
}

// 功能测试
const inputEl = document.querySelector("#debounce");
function inputChange() {
  console.log("输入操作");
}
const newInputChange = debounce(inputChange, 2000);
inputEl.oninput = newInputChange;
// 取消功能
const btnEl = document.querySelector("#cancle");
btnEl.onclick = newInputChange.cancle;
// 返回值
