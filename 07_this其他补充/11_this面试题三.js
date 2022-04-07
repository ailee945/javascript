var name = 'window'

function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person1 = new Person('person1') // person1 = { name: person1, foo1...}
var person2 = new Person('person2') // person1 = { name: person2, foo1...}

person1.foo1() // person1 隐式绑定
person1.foo1.call(person2) // person2 显式绑定

person1.foo2() // window ✕ person1 上层作用域是person1
person1.foo2.call(person2) // window ✕ person1 call不绑定箭头函数的this 上层作用域是person

person1.foo3()() // window 独立函数调用
person1.foo3.call(person2)() // person2 ✕ window 独立函数调用
person1.foo3().call(person2) // person2 显式绑定

person1.foo4()() // person1 
person1.foo4.call(person2)() // person1 ✕ person2 已经给foo4显式绑定person2
person1.foo4().call(person2) // person1


var obj = {
  name: "obj",
  foo: function() {

  }
}


