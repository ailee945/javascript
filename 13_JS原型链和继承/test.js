let obj = {
  name:'zhang'
}
console.log(obj.__proto__); // [Object: null prototype] {}  顶层原型

function Person(){
  this.name = 'zhang'
}
let obj2 = new Person
console.log(obj2.__proto__); // {} Peroson.prototype
console.log(obj2.__proto__.__proto__); // [Object: null prototype] {}  顶层原型 Object.prototype