### 函数的声明方式

1. 声明
``` 
//具名函数
function x(){}
//匿名函数
function(){}
var x = function f(){}
var f = new Function()
(x,y) => {return x + y}
```

### 函数的本质

1. 函数是一段可以反复调用的代码块

### this 与 arguments

`f.call(obj,1,2,3)`
1. call的第一个参数可以用this得到
2. call的第一个参数后面的其他参数就是arguments
3. this是可以被手动更改的


### call  stack  调用栈

1. 先进后出
2. 栈溢出

### 作用域

1. 全局作用域
2. 函数作用域
3. 块级作用域
4. 声明提升
5. 闭包
```
var a = 1
function f(){console.log(a)}
//如果一个函数使用了他范围外的变量，那么这个函数 + 这个变量 构成了闭包

```