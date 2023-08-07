### 标准库

1. MDN 更全面

### window.Array 和 window.Function

1. Object() //接受什么参数就会包装成什么类型的对象 
2. new Object() //返回的也是对象
3. String() //返回一个string
4. new String() // 返回的是对像
5. Number 同 String

### Array用法

1. var a = Array(3)  等价于 new Array(3)//长度为3，每个数组元素都是undefined的数组，实际没有真正的值   a["0"] in a // false
2. var b = Array(3,3) 等价于 new Array(3,3) //生成[3,3] 的数组

### Function用法

1. `var f = function(a,b) {return a + b}`
2. `var f = new Function("a","b","return a+b") ` // 不加new 也是可以的

### function 关键字 VS Function函数对象

1. function 关键字，声明一个函数
2. Function构造函数，也可以声明一个函数