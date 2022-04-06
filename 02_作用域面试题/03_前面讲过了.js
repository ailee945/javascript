var n = 100;

function foo1() {
  console.log(n);
}

function foo2() {
  var n = 200;
  console.log(n);
  foo1();
}

foo2();
console.log(n);

// 200 100 100

/**
 * 考察点：
 * 函数作用域的解析时就已经确定
 * 优先在AO中寻找
 */