### 全局对象window

1. 浏览器的全局对象是window
2. 全局对象 global （浏览器中为window）
3. window属性分为两类：
    - ECMAScript规定
    - 私有的（Chrome/Firefox）:alert,prompt,confirm,console，**document**, history
4. window.xxx 可以省略widnow

### Number

1. 声明Number对象 使用new
2. 类型转换，转换成number
3. 基本类型没有属性
4. 例子
```
var n = 1;
n.xxx = 2 ; //不会报错
console.log(n.xxx) // undefined

```

### String

1. 类型转换：转换成string
2. 声明String对象 使用new
3. 字符串可以直接`s[0] === s.charAt(0)`获取索引0 对应的字符

### Boolean

1. 声明Boolean对象 使用new

### 原型

1. 共有属性

### 烧脑的__proto__和prototype

1. __proto__与prototype
```
var 对象 = new  函数（）
对象.__proto__=== 函数.prototype
函数.prototype.__proto__ === Object.prototype
函数.__proto__ === Function.prototype
Function.__proto__=== Function.prototype
Function.prototype.__proto__ === Object.prototype
```
