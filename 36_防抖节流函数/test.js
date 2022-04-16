function debounce(fn, delay, immediate = false) {
  // 闭包，定义上一次的定时器
  let timer = null;
  // 实现立即执行
  let isInvoke = false;

  return function (...args) {
    // 每次执行前清除定时器
    if (timer) clearTimeout(timer);
    if (immediate && !isInvoke) {
      fn.apply(this, args);
      isInvoke = true
    } else {
      // 执行函数
      timer = setTimeout(() => {
        // 绑定this 参数传递
        fn.apply(this, args);
        isInvoke = false
      }, delay);
    }
  };
}

// 功能测试
const inputEl = document.querySelector("input");
inputEl.oninput = debounce(() => {
  console.log("输入操作");
}, 1000,true);
