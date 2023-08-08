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