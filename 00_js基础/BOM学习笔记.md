# BOM

浏览器对象模型

## Window

浏览器的整个窗口，同时也是网页中的全局对象

- 定时调用`setINterval()`, 返回一个Number类型的数值，用来作为定时器的唯一标识

  - 为了防止多次点击更新速度快的问题，开启定时器之前关闭定时器

  ```js
  var timer = setInterval(function(){
      语句...
      if(判断条件){
          clearInterval(timer) // 关闭定时器
          // 
      }
  },1000); 
  // 参数1: 回调函数，每隔一定时间被调用一次；
  // 参数2: 间隔的时间(ms)
  ```

- 延时调用`setTimeout()`

  ```js
  // 一个函数不马上调用，而是间隔一段时间后进行调用
  var timer = setTimeout(function(){
      
  }, 1000);
  clearTimeout(timer); // 清除定时器
  ```

## Navigator

浏览器信息，以识别不同浏览器

- 一般只会使用`userAgent`来判断浏览器信息
- 使用ie独有的属性判断浏览器

## Location

代表浏览器的地址栏信息，获取地址栏信息，跳转浏览器页面

- `[window.]location = 'https://www.baidu.com'`并生成相应的历史记录
- `assign()`相当于直接赋值
- `reload()`相当于刷新按钮，传入true参数为强制刷新
- `replace()`替换页面，不会生成历史记录

## History

代表浏览器历史记录，用来操作浏览器的历史记录(只能操作浏览器向前向后翻页)

- 属性`length`可以获取到当前访问的链接数量
- `back()`回退到上一个页面
- `forward()`跳转到下一个页面
- `go(int)`需要整数作为参数，跳转到指定页面

## Screen

代表用户的屏幕信息，用来显示用户显示器的信息
