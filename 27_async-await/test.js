// 异步函数的返回值是一个Promise
async function foo(){
  console.log('---foo start---');
  console.log('---foo end---');
}

/**
 * 执行顺序
 */
console.log('---script start---');
foo()
console.log('---script end---');

// await关键字
async function bar(){
  const res = await new Promise((resolve,reject)=>{
    resolve('===await关键字===')
  })
  /**
   * 以下的代码都是在上面的promise的then方法中执行的
   */
  console.log(res);
}

bar()

// reject