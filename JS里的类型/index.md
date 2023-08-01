### 类型转换

1. toSting()
2. `+`运算符
3. window.string()
4. ""， 0， false，null， undefined ， NaN 转为false,其余为true
5. !! ：  转为true
6. Number()
7. parseInt()
8. parseFloat()
9. -0： "123"-0 //123  减0
10. +: + "1333" // 123 取正

### 内存

1. 栈内存（stack） ：简单类型存储
2. 堆内存（heap）：复杂数据类型存储
3. 变量提升
4. JS中的浮点数是以64位存储的
5. 数字是 64位，字符是 16位

### 循环引用及垃圾回收

1. ![image.png](https://upload-images.jianshu.io/upload_images/5628037-13afbb1583be19e6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2. 如果一个对象没有被引用，那么就是垃圾，将被回收

### 深拷贝以及浅拷贝