function foo() {
  var name = "why";
  var age = 18;

  function bar() {
    debugger;
    console.log(name);
    // console.log(age); // ECMA 规定a属性不回收，实际js引擎会回收
  }

  return bar;
}

var fn = foo();
fn();
