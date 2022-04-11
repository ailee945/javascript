// Set
const set = new Set();
const iterator = set[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// arguments
function foo(x, y, z) {
  console.log(arguments[Symbol.iterator]);
  for (const iterator of arguments) {
    console.log(iterator);
  }
}

foo(1, 2, 3, 4, 5, 6, 7, 8);

// 生成器参数传递问题

function* foo(x) {
  console.log("--生成器函数开始执行--");
  const value1 = 10;
  console.log("value1---", value1-x);
  const m = yield value1;
  const value2 = 20;
  console.log("value2---", value2 * m);
  yield value2 * m;
  const value3 = 30;
  console.log("value3---", value3);
  yield value3;
  console.log("--生成器函数结束执行--");
  return 1000
}

const generator = foo(3);

console.log(generator.next(3));
console.log(generator.next(5));
console.log(generator.next()); // { value: 30, done: false }
console.log(generator.next()); // { value: 1000, done: true }
