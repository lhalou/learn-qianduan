### 脚本

1. 脚本就是给机器一行行执行的文本
2. Base脚本有Base脚本的语法，Node.js脚本有JS语法
3. 不管是那种脚本，实现的功能差不多，只是语法不同


### JS

1. JS是一门动态类型、面向对象的脚本语言
2. 使用ls -l查看文件是否有可执行权限，带-x表示有
```
-rw-r--r--  1 hly  staff   67  6 26 10:37 README.md
drwxr-xr-x  4 hly  staff  128  7  3 19:22 脚本
drwxr-xr-x  3 hly  staff   96  7  3 14:18 软件安装
drwxr-xr-x  3 hly  staff   96  7  3 16:10 命令行基础
drwxr-xr-x  3 hly  staff   96  7  3 11:33 计算机如何存储数据的
```

### Base脚本

1. chmod +x demo.sh:对demo.sh添加可执行权限
2. sh demo.sh: 执行demo.sh
3. Base脚本的后缀名是.sh

### PATH的作用：

一堆目录
1. echo $PATH
```
/Users/hly/.nvm/versions/node/v12.22.3/bin:/usr/local/bin:/usr/local/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin
```
2. type cp（ls、cd等）:查看命令是什么
3. ll /bin： 查看所有的命令
4. Node.js也是脚本，与base脚本语法不同

### Node.js脚本语法

node.js的所有语法是有官网文档的[node.js官网](https://nodejs.org/en)
1. 先执行node:进入node环境
2. process.cwd()：查看当前文件路径
3. 创建目录
```
var fs = require('fs')
fs.mkdirSync('./hahaha')
```
4. 创建文件
```
//注意，文件目录要存在
fs.writeFileSync('./hha/index.txt', "hahaha")
```
5. node脚本使用node命令运行
6. 我们每次执行 ~/local/jsdemo.js 都要用 node 来执行，能不能做到不加 node 也能执行呢（也就是指定执行环境），可以，在 jsdemo.js 第一行加上这一句即可：
```angular2html
#!/usr/bin/env node
```
### 退出终端

1. control + D：退出
2. control + C：中断

