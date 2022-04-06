function foo() {
  var a = (b = 10);
  // => 转成下面的两行代码
  // var a = 10
  // b = 10 定义在全局的变量
}

foo();

// console.log(a)
// console.log(b)
// 报错：a is not defined

// console.log(a)
console.log(b); // 10
