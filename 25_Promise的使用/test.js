const promise = new Promise((resolve,reject)=>{
  resolve('resolve---')
  // reject('reject---')
})

promise.then((res)=>{
  console.log(res);
  throw new Error('reject then ---')
}).catch((err)=>{
  console.log(err); // reject ---; 优先调用第一个Promise的错误
})