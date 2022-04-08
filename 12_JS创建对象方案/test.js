let obj = {};

console.log(obj.__proto__); // 浏览器提供的属性

console.info(Object.getPrototypeOf(obj) === obj.__proto__);
