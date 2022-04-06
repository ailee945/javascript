var n = 100

function foo() {
  n = 200  // 现在AO里面找，AO里面没有的话到GO里面找，GO中的n改为100
}

foo()

console.log(n) // 200
