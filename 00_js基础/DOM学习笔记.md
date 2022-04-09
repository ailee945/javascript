# DOM

- DOM(Document Object Module) 文档对象模型

- Node 节点，构成HTML的基本单元

  - 文档节点
  - 元素节点
  - 属性节点
  - 文本节点

- document对象 window的一个属性

- 事件 js与html交互的行为

  ```js
  // 单击响应事件
  var btn = document.getElementById('btn');
  btn.onclick = function(){
      alert('I'm btn)
  }
  ```

- 文档的加载顺序：早上而下依次执行

  ```js
  // onload会在页面加载完成后执行
  window.onload = function(){
      alert('我是在页面加载完成后执行的')
  }
  ```

## DOM查询方法

1. document获取元素节点对象

   - `getElementById()`通过id属性获得一个元素节点对象

   - `getElementsByTagName()`通过标签名获取一组元素节点对象【类数组对象】

     自结束标签没有innerHTML属性，获取class属性需要使用classname

   - `getElementsByName()`通过name属性获取一组元素节点对象【类数组对象】

2. 获取元素节点的子节点

   - `getElementsByTagName()`获取当前节点的指定标签名后代节点

   - `childNodes`属性-子节点

     包括文本节点在内的所有节点，DOM标签间的空白也会获取

   - `children`所有子元素

   - `firstChild`当前节点的第一个子节点

   - `lastChild`当前节点的最后一个子节点

3. 获取父节点和兄弟节点

   - `parentNode`父节点
   - `previousSibling`前一个兄弟节点
   - `nextSibling`下一个兄弟节点

4. DOM查询的剩余方法

   - `body`document的一个属性`var body = document.body`
   - `document.documentElement`就是html
   - `document.getElementsByClassName`
   - `document.querySelector('.box')`根据css选择器获取节点对象(只会返回第一个)
   - `document.querySelectorAll()`与上面的类似，返回的是符合条件的所有元素数组集合

## 对象的增删改方法

1. `document.createElement(‘div’)`用于创建元素节点对象
2. `document.createTextNode('广州')`创建文本节点
3. `父节点.appendChild()`向父节点添加子节点
4. `父节点.insertBefore(newNode, OldNode)`插入子节点
5. `父节点.replaceChild(newNode, OldNode)`替换子节点
6. `removeChild()`移除子节点，后面这种比较常用`子节点.parentNode.removeChild(子节点)`
7. `innerHTML`也可以完成子节点的插入`node.innerHTML += 'otherNode'`

## 使用DOM操作css

1. 修改内联样式(优先级仅次于!important)

   - `元素.style.样式名 = ''`(样式名要写成驼峰命名法)
   - 通过style设置和读取的都是内联样式。

2. 获取当前生效的样式

   - `object.currentStyle.样式名`仅ie8，如果没有设置对应样式返回默认值

   - `getComputedStyle(要获取样式的元素，可以传递一个伪元素null)`ie8+ 该方法回返回一个对象，对象封装了元素对应的样式如果没有设置对应样式返回当前值

   - ```js
     function getStyle(obj, name){
         if(window.getComputed){ // 变量没有会报错，属性没有会undefined
             return getComputedStyle(obj, null)[name] // ie8+
         } else{
             return obj.currentStyle[name] //ie8
         }
     }
     ```

3. 其他样式操作的属性
   - `element.clientWidth` `element.clientHeigh`可见宽度和可见高度(包括内容区和内边距)--只读属性
   - `offsetWidth` `offsetHeight` 包括内容区，内边距、边框--只读属性
   - `offsetParent`定位父元素--距离当前元素最近的开启定位的祖先元素，没有则返回body
   - `offsetLeft` `offsetTop`当前元素距离其定位父元素的水平(垂直)偏移值
   - `scrollWidth` `scrollHeight`滚动宽度、滚动高度
   - `scrolLeft` `scrollTop`滚动条滚动水平(垂直)滚动的距离
   - `scrollHeight-scrollTop`用于验证阅读协议

## 事件

- **事件对象**：事件的相应函数被触发时，浏览器都会讲一个事件对象(event)作为实参传递进响应函数( ie8+ )

- **事件冒泡**：*当一个事件发生在一个元素上，它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其他祖先上的处理程序*，所谓的冒泡就是事件的**向上**传导
  - 开发中大部分冒泡事件都是有益的
  - 取消冒泡：`event.cancelBubble = true`
  - 事件委派：指将事件绑定到事件的祖先元素，这样后代上的时间触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应函数来处理事件，事件的委派是利用冒泡，通过委派可以减少绑定的次数，提高程序性能。
  - `event.target`触发事件的元素

1. `onmousemove`鼠标移动事件
   - `clientX`鼠标相对于可见区域的X坐标
   - `clientY`鼠标相对于可见区域的Y坐标
   - `pageX`鼠标相对于当前页面的X坐标
   - `pageY`鼠标相对于当前页面的Y坐标(ie8+)

## 事件的绑定

- `object.addEventListener()`绑定事件的方法(可以同时为一个元素的相同事件绑定多个响应函数)(ie8+)
  - 参数1：事件的字符串，不带on
  - 参数2：回调函数
  - 参数3：是否在捕获阶段触发函数，布尔值，一般都传入false
- `attachEvent()`(ie5-ie8)(可以同时为一个元素的相同事件绑定多个响应函数)，不同的是执行顺序和addEventListener()执行顺序相反
  - 参数1：事件的字符串，带on
  - 参数2：回调函数

## 事件的传播

- 事件的冒泡
- 事件的捕获
