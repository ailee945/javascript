function foo() {
  console.log(n) // 优先在AO里面查找，此时n=undefined
  var n = 200
  console.log(n) // 优先在AO里面查找，此时n=200
}

var n = 100
foo() // undefined 200
