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


### 什么是数组

1. 数组是按次序排列的一组值
2. 数组和对象都是对象，只是原型链不同的对象
3. for循环无法遍历出数组中不是数字的key的项
4. for。。in循环可以
```
var a = [1,2,3]
a.xx = "aa"
a.yy = "bb"
console.log(a)
console.log(a.length) //3
//访问不到非数组项
for(let i = 0; i< a.length; i++) {
    console.log(i, a[i])
}
//可以访问到非数字项
for(let key in a) {
    console.log("key", key, a[key])
}
```
5. 具有length属性，但是原型链中没有Array.prototype，就是伪数组
6. arguments是伪数组，是函数内置的变量
```
function f(){
    console.log(arguments,'arguments')
}
f(1,2,3)
```

### 数组的api ：链式操作

1. forEach ：接受一个函数，函数必须接受2个数，没有返回值
```
var a = [1,2,3]
a.forEach((x,y) => {
    console.log(x,'x')
    console.log(y,'y')
})
```
2. forEach循环等价于for循环
3. sort
4. join
5. concat： 会返回一个新的数组
6. map: 会返回值
7. filter：过滤数组
8. reduce
9. 