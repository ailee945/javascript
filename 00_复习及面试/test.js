function foo(n1) {
  return function (n2) {
    return n1 + n2;
  };
}

const add5 = foo(5);
console.log(add5(10));

var arr = [1, 2, 3, 4];
var total = arr.reduce(() => 0);
console.log(total);

function foo() {
  var n = 1;
  function bar(n) {
    console.log(n);
  }
  bar();
}
foo();
