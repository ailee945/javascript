function foo(parameter){
  console.log('foo start');
  if(parameter === 1) throw new Error('-----')
  console.log('foo   end');
}

foo(1)

console.log('程序正常运行');
