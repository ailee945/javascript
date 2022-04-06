var a = 100;

function foo() {
  console.log(a);
  return;
  var a = 200;
}

foo(); //undefined

/**
 * 考察点：
 * 解析的时候不管return，return是在函数执行过程中起作用
 * 解析的时候函数AO：a=undefined
 */
