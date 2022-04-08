function customCompose(...fnsArgs) {
  const length = fnsArgs.length;
  if (length === 0) return;
  for (let i = 0; i < length; i++) {
    if (typeof fnsArgs[i] !== "function") throw new TypeError("参数类型错误");
  }
  function compose(...args) {
    let i = 0;
    let res = fnsArgs[i].apply(this, args);
    while (++i < length) {
      res = fnsArgs[i].call(this, res);
    }
    return res;
  }
  return compose;
}

// 功能测试

function sum(x, y, z) {
  return x + y + z;
}

function square(n) {
  return n ** 2;
}

console.log(square(sum(1, 2, 3)));

const newFn = customCompose(sum, square);
console.log(newFn(1, 2, 3));
