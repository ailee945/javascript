// 遍历数组

const nums = [1, 2, 3, 4, 5, 6, 7];

function* foo(nums) {
  // 第一种写法
  for (const num of nums) {
    yield num
  }
  // 第二种写法
  // yield* nums;
}

const fnGen = foo(nums);

console.log(fnGen.next().value);
console.log(fnGen.next().value);
console.log(fnGen.next().value);
console.log(fnGen.next().value);
console.log(fnGen.next().value);
console.log(fnGen.next().value);
console.log(fnGen.next().value);
console.log(fnGen.next().value);

// 创建一个函数, 迭代一个范围内的数字
function* bar(m, n) {
  for (let i = m; i < n; i++) {
    yield* i;
  }
}

const barGen = bar();
console.log(barGen.next());
console.log(barGen.next());
console.log(barGen.next());
