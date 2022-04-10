// Reflect.construct()
function Student(name, age) {
  this.name = name;
  this.age = age;
}

function Teacher() {}

const stu = new Student("zang", 22);
console.log(stu); // Student { name: 'zang', age: 22 }

const st = Reflect.construct(Student, ["zhang", 37], Teacher);
console.log(st); // Teacher { name: 'zhang', age: 37 }
