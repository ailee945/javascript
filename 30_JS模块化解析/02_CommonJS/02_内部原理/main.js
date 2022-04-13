const info = require("./why.js")
const why = require("./why.js")

console.log(why)

setTimeout(() => {
  // console.log(why.name)
  why.name = "james"
}, 1000)


// info module.exports why 指向同一个对象