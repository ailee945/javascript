# 标志符命名规则

1. 标志符中可以包含数字、字母、_、$\

2. 标志符不能以数字开头

3. 不能含有关键字或是保留字

4. 一般采用驼峰命名法

# 数据类型

## 基本数据类型

### String 字符串

1. 引号引起来 单引号及双引号都行 但不要互相混用
2. 使用`\`做为转义字符 `\n`表示换行 `\t`表示制表符  `\\`表示\
3. `String`方法-在底层字符串是以字符数组的形式保存的
   1. 属性`length`
   2. `chartAt`返回字符串指定位置的字符
   3. `chartCodeAt`返回指定位置字符的Unicode编码
   4. `String.fromCharCode(Unicode编码)`根据字符编码获取字符
   5. `concat()`连接字符串
   6. `indexOf(_, [开始查找的位置])`检索字符串中是否含有指定内容，返回其第一次出现的索引，如果没有指定的内容则返回-1
   7. `lastIndexOf()`从后往前找指定内容
   8. `slice(start, end)`截取字符串，包含开始不包含结束
   9. `substring(start, end)`截取字符串，第二个参数不接受负值，如果第二个参数小于第一个参数，则自动调整两个参数的位置
   10. `substr()`
   11. `split(根据什么符号进行拆分)`可以将字符串拆分为数组
   12. `toUpperCase()`转换为大写字母
   13. `toLowerCase()`转换为小写字母

### Number 数值

1. 所有数值都是`Number`，包括整数和浮点数

2. `typeof` 用来检查一个变量的类型

3. `Max_Value` 表示最大值; `Min_Value`表示最小的正值

4. `infinity` 表示正无穷; `-infinity` 表示负无穷

5. `NaN` 是一个特殊的数值类型

6. 不要用js进行精确的浮点数运算

7. 16进制数字:0x开头;  8进制数字:0开头; 二进制数字:0b开头。

### Boolean 布尔型

1. `true`逻辑真和`false`逻辑假

### Null 空值

1. 专门用来表示一个空的对象，`typeof`返回`object`

### Undefined 未定义

1. 未定义，声明未赋值，`typeof`返回`object`

### 强制类型转换

1. 调用被转换数据类型的`toString()`方法，不会影响原变量，null和undefined没有`toString()`方法 `a = a.String()`

2. `String()`函数 *将参数传递给函数 `a = String(a)`

3. `Number()`函数 `'123'=>123`; `有非数字内容=>NaN`; `空格或是全空格的字符串=>0`; `true=>1`; `false=>0`; `null=>0`; `defined=>0`

4. `parseInt(a, b这里是进制)`函数`'123.562f444'=>123`

5. `parseFloat()`函数 可以获得有效的小数。对于非String类型，会先转换为String类型，再转换为Float

6. `Boolean()`函数 `0/NaN/false/null/undefined => false`

### 运算符

##### 算术运算符+ - * /

##### 一元运算符 -负 +正

##### 逻辑运算符

1. 对于非布尔值的逻辑运算时会先将其转换为布尔值，并且返回原值

2. && 如果第一个值为true，则必然返回第二个值；如果第一个值false，则直接返回第一个值`0&&2->0, 2&0->0, 0&NaN->0, NaN&&0->NaN, 5&&6->6`

3. || 短路运算：如果第一个值为true则直接返回第一个值；如果第一个值为false则直接返回第二个值

##### 赋值运算符 = += -= *= /= %=

##### 关系运算符 > >= < <=

1. 对于非数值型进行比较，先转换成数值型再进行比较(任何值和NaN进行比较都是false)，两边都是字符串，则依次比较两边的Unicode编码

2. 补充一点有意思的知识：1、在字符串中使用unicode编码-十六进制 ‘\u2626’ 2、在html中使用-十进制 \<h2\>&#9760\</h2\>

##### 相等运算符

1. == `1=='1' //true`; `true=='1' //true`转换为数字进行比较; `null==0 //false`; `null=undefined //true`; `NaN`不和任何值相等包含它本身 通过`isNaN()`函数是否是`NaN`

2. !=

3. ===

4. !==

##### 条件运算符(三元运算符)

条件表达式？语句1：语句2, 有返回值

##### ，运算符

同时定义多个变量

##### 运算符的优先级

实际使用()改变优先级

## 引用数据类型

### Object 对象-引用数据类型

#### 内建对象

Math String Number

##### Array

`Array`数组也是一种对象，不同的是数组通过属性名操作对象，数组通过数字作为索引号来操作对象

1. `typeof`返回的是一个`Object`

2. `var arr = new Array(1, 2, 3)`使用构造函数创建数组的同时也可以指定数组中的元素

3. 读取不存在的索引返回的是`undefined`

4. 获取或是**设置**`length`获取数组的长度，`arr.length`

5. `arr[arr.length] = 1`向数组的最后一位添加元素

6. 使用字面量创建数组`var arr = [1, 2, 3]`

7. `push()`方法:向数组末尾添加一个或是多个元素，该方法会将数组的最新长度作为返回值返回

8. `pop()`方法：删除数组的最后一个元素，该方法会将被删除的元素作为返回值返回

9. `unshift()`：向数组的开头添加一个或是多个元素

10. `shift()`: 删除数组开头的元素

11. 数组遍历
    - for循环`for(var i = 0; i < arr.length; i++){ 语句... }`
    - `forEach(function(value, index, 正在遍历的数组){ 语句...})`数组中有几个元素，函数就执行几次，回调函数会传入三个参数(value, index,数组本身)

12. `slice(startIndex, [endIndex])`从数组返回选定的元素, 不回改变原数组, 包含开始不包含结束，`endIndex`输入负值则从后截取

13. `splice(startIndex, 删除的数量，新元素1，新元素2)`, 从数组删除指定元素，改变原数组，返回被删除的元素

14. `concat(arr1, arr2)`连接两个或是多个数组，并返回新的数组，不会改变原来的数组

15. `join('连接符')`将数组转换为字符串，不会改变原数组，默认连接符为，

16. `reverse()`颠倒数组，会直接改变数组

17. `sort()`对数组进行排序，会影响原数组，会按照Unicode进行排序；

    - 对数字进行排序，需要传入一个回调函数，回调函数传入两个值a，b；

    - 返回一个大于零的值则会将换两个数字的位置

    - 返回一个小于零的数字则不会交换位置

    - 返回一个0则默认两个数字相等

      ```js
      var arr = [1,2,3,4,5,6,3,5];
      arr.sort(function(){
          return a > b; // 升序排列
          return a < b; // 降序排列
      })
      ```

##### Date

##### Math

- 不是构造函数，属于工具类，不用创建对象。
- 属性`Math.PI` `Math.E`
- 方法`Math.abs(绝对值)` `Math.ceil(向上取整)` `Math.floor(向下取整)` `Math.round(四舍五入)` `Math.random(0-1的随机数)` `Math.max(最大值)` `Math.min(最小值)`  `Math.pow(x, y)x的y次幂` `Math.sqrt(开方计算)`

##### 包装类

- `Number()`-可以将基本数据类型转换为String对象 `var a = new String('a') typeof 输出Object`
- `String()`
- `Boolean()`

#### 宿主对象

BOM DOM

#### 自建对象

字面量创建对象、构造函数创建对象、工厂函数创建对象

##### Object

1. 构造函数创建对象

   - 使用构造函数创建对象，添加属性，读取属性，修改属性，删除属性

     ```javascript
     var obj = new Object();
     obj.name = 'jang';
     obj.gender = '男';
     console.log(obj.name);
     onj.name = 'lee'; // 修改属性值
     delete obj.name; // 删除属性值
     obj['123]=789; //[]添加属性，属性名是特殊的字符
     console.log(obj['123 ])
     ```

   - `in`运算符，检查对象中是否含有指定属性，返回true及false`console.log('test' in obj)`

   - 对象的属性名不强制遵守标志符的规范；对象的属性值可以是任意的类型。

   - 对象的属性值也可以是一个函数，我们称这个函数是对象的方法，调用函数就说调用方法。

2. 字面量对象

   ```java
   var obj = {
       name:'lee',
       age:18 // 名值结构
   }
   ```

3. 工厂函数创建对象

   - 用于大量创建对象

     ```js
      function createFuntion(name, age, gender){
       var obj = new Object();
       obj.name = name;
       obj.age = age;
       obj.gender = gender;
       return obj
      }
      var obj1 = createObject('jang', 18, '男')
     ```

4. 基本数据类型和引用数据类型

5. 枚举对象属性

   枚举对象属性`for..in..`, 每次执行就会将对象中的属性值赋值给变量

   ```javascript
   var info = {
    name:'lee';
    age:18;
    gender:'男'
   };
   for(var n in info){
    console.log(n); // name, age, gender
    console.log(info[n]); // lee, 18, 男
   }
   ```

##### function

1. 创建函数的三种方式
   - 函数也是一种对象：`var fn = new Function(console.log('function'))`调用时`fn()`
   - 函数声明创建函数：`function fn([形参1, 形参2]){语句...}`调用时`fn()`
   - 函数表达式创建函数(创建匿名函数赋值给变量)`var fn = function(){}`调用`fn()`

2. 函数的参数

   实参可以是一个对象，函数

3. 函数的返回值

   - 函数的返回值将作为函数的返回结果进行返回

   - return后面的语句都不会执行

   - return后面不跟任何值及不写return都相当于返回一个undefined

     ```javascript
     // 定义一个函数是否是偶数，如果是则返回true，否则则返回false
     function isEven(num){
      return num % 2 ==0
     }
     ```

4. 立即执行函数

   立即执行函数往往只会执行一次

   ```javascript
   (function(a, b){alert('我是一个匿名函数')})(2, 3)
   ```

5. 作用域
   - 全局作用域
     1. 全局作用域下，创建的变量会作为window的属性保存
     2. 全局作用域下，创建的函数会作为window的方法保存
     3. 变量声明提前--var声明的变量，会在所有代码执行之前被声明
     4. 函数声明提前--function声明的函数，会在所有代码执行前就被创建
     5. 全局作用域中的变量就是全局变量，在页面的任意位置都可以调用

6. 函数作用域(局部作用域)

   1. 函数中访问全局变量可以使用window

   2. 在函数作用域中也有声明提前

   3. 形参就相当于定义一个变量

      ```javascript
       var c = 33;
       function fn(){
        console.log('c=' + c)
        c = 10
       };
       fn(); //c=33
       console.log(c); // 10  没有使用var声明的变量都会成为全局变量
      ```

7. this
   - 解析器在调用函数时都会向函数内部传递一个隐含参数this, 即上下文对象，根据函数的**调用**方式不同, this会指向不同的对象。
   - 以函数形式调用this就是window
   - 以方法形式调用this就是调用方法的对象
   - 以构造函数调用时，this是新创建的那个对象
   - call和apply调用时，this就是传入的那个对象

8. 构造函数

   构造函数也被称为一个类

   - 构造函数执行流程：立即创建一个新的对象；将创建的对象设置为函数中的this，在构造函数中可以使用this引用新的对象；逐行执行函数中的代码；将新建的对象作为函数返回。

     ```javascript
     function Person(name, age, gender){
      this.name = name;
      this.age = age;
      this.gender = gender
     };
     var per = new Person('lee', 28, '男');
     // instanceof 检查一个对象是否是一个类中的实例
     ```

    - 构造函数中的方法可以定义在全局变量中，这样可以节省性能，但是会占用命名空间，同时不够安全

9. `prototype`原型

   - 创建的每一个函数解析器都会向函数添加一个属性prototype
   - 只有通过构造函数创建的对象，可以通过`__proto__`进行访问
   - 相当于一个公共的区域，所有实例都可以访问，可以将几个对象共有新的属性设置到原型中`per.prototype.a = 1`
   - 原型对象也是对象，所以他有原型：当我们使用一个对象的属性或方法时，会在自身中寻找，自身总如果有则使用；如果没有就去原型对象中寻找，如果原型对象中有则使用；如果没有择取原型对象的原型中寻找，直到找到Object对象的原型；Object对象的原型没有原型，如果在Object中依然没有找到，则直接返回undefined。
   - `in`用来检查对象中是否含有某个属性，先查找对象本身再去原型中查找
   - `hasOwnProperty()`用来检查对象中是否含有某个属性，不会检查原型中
   - `toString()`我们在页面打印一个对象就是输出这个对象的`toString()`返回值

10. 垃圾回收机制
    - JS拥有自动垃圾回收机制，只需要把不需要的对象设置为`null`

11. 函数对象的两种方法`call()`和`apply()`

    - 两种方法通过函数对象进行调用`fun.apply()`
    - 调用时将一个对象指定为第一个参数，此时这个对象将成为函数的this
    - `call()`方法可以将实参在对象之后传入
    - `apply()`方法需要将实参封装到一个数组中传入

12. `arguments`封装实参的类数组对象；`arguments.length`获取实参的数量；`arguments.calee`就是正在执行的函数对象

# 流程控制语句

## 条件判断语句(if语句)

1. if语句仅能控制紧随其后的语句，如果希望控制多条语句，则需要使用代码块{ }

2. if...else...

3. if..else if...else...

4. 条件分支语句(switch语句)

```javascript
 switch(条件表达式){
   case 表达式(进行全等比较):
   语句1...
   break(退出switch语句);
   case 表达式:
   语句2...
   break;
   case 表达式:
   语句3...
   break;
   default:
   语句4...；
   break
  }
```

## 循环语句

1. while(条件表达式){循环语句...}

```javascript
  while(i<100){
   document.write('1'+'<br/>')
  }
```

2. do{循环语句}while(条件表达式)-循环体至少执行一次

3. for循环

```javascript
for(初始化表达式; 条件表达式; 更新表达式){
 语句...
}
```

4. 嵌套for循环
5. `break`中止当前循环 -不能用在if语句中；`-label`：循环语句；`continue`跳过当次循环；二者只会对离它最近的语句起作用；用于性能提升

# 正则表达式

## 构造函数创建正则表达式

1. 创建正则表达式的对象`var reg = new RegExp('正则表达式', '匹配模式')`

2. `typeof`返回的是Object

3. `test()`检查一个字符串是否符合正则表达式

   ```js
   var reg = new RegExp('a'); //这个正则表达式可以检查一个字符串中是否含有a，严格区分大小写
   var a = 'a';
   var result = reg.test(a); // true
   var result2 = reg.test('bbAbb'); //false
   ```

4. 匹配模式参数 -i:忽略大小写；-g全局匹配模式

## 字面量创建正则表达式

1. `var reg = /a/i`
2. 构造函数灵活，字面量简洁

## 字符串和正则相关的语法

1. `split()`

   ```js
   // 利用正则表达式拆分字符串
   // 即使不g也会全局匹配
   var a = '1a2b3c4d5e6f';
   var result = a.split(/[A-z]/)
   ```

2. `search()`搜索字符串是否含有指定内容，返回索引值，可以传入一个正则

   ```js
   // 即使设置g也不能全局匹配
   var a = 'hello abc hello adc aec';
   var res = a.search(/a[bde]c/); // 6
   ```

3. `match()`根据正则表达式从一个字符串中将符合条件的内容提取出来

   - 默认只会找到第一个符合要求的内容，设为全局模式可以匹配到所有内容
   - 可以为一个正则表达式设置多个匹配模式，且顺序无所谓

   ```js
   var str = '1a2b3c4d5e6f';
   var res = str.match(/[A-z]/gi); // 返回的是一个数组
   var res = str.match(/[A-z]/ig)
   ```

4. `replace(被替换的内容，替换的内容)`，默认只会替换第一个`a.replace(/[A-z]/gj,'')`

## 语法

1. `|`表示或者的意思`var reg =  /a|b/`

2. `[]`y也表示或者的意思`[ab] == a|b`

3. `[a-z]`表示任意的小写字母，`[A-Z]`表示任意的大写字母，`[A-z]`表示任意字母，`[0-9]`表示任意的数字，`[^0-9]`除了数字以外的字符

4. `/a[bde]c/`表示一个字符串是否含有abc, adc, aec

5. `[^]`表示除了...

   ```js
   var = reg = /[^ab]/; // 是否含有除了a|b以外的字符
   var result = reg.test('abc'); // false
   ```

6. 量词--设置一个内容出现的次数

   - `/a{3}/`表示a出现三次
   - `/ab{3}/`表示b出现三次，量词只对他前面的内容起作用
   - `/(ab){3}/`表示ab出现三次
   - `/ab{3}c/`表示abbbc
   - `{m, n}`表示出现m-n次，`{m,}`表示至少m次
   - `+`表示至少一次，相当于`{1, }`
   - `*`表示至少0次，相当于`{0, }`
   - `?`表示0或1次，相当于`{0, 1}`

7. `/^a/`表示以a开头，`/a$/`表示以a结尾， `/^a|a$/`表示以a开头或是以a结尾

   ```js
   var phoneStr = '13422222222';
   var phoneReg = /^1[3-9][0-9]{9}$/;
   console.log(phoneReg.test(phoneStr)); // true
   ```

8. 转义字符`\`

   - `.`比较特殊，有特殊含义

   - 注意使用构造函数时，由于它的参数是一个字符串，而\是字符串中的转义字符，如果要是用\则需要使用\\\代替

   - `\w`表示任意字母、数字、_

   - `\W`表示除了字母数字_

   - `\d`表示任意数字

   - `\D`表示除了数字

   - `\s`表示空格

   - `\S`表示除了空格

   - `\b`单词边界

     ```js
     var reg = /\bchild\b/; // 独立的单词child
     reg.test('children'); // false
     reg.test('child'); // true
     ```

   - `\B`除了单词边界
