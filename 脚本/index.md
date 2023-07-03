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
3. chmod +x demo.sh:对demo.sh添加可执行权限
4. sh demo.sh: 执行demo.sh

### PATH的作用：

一堆目录
1. echo $PATH
```
/Users/hly/.nvm/versions/node/v12.22.3/bin:/usr/local/bin:/usr/local/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin
```
2. type cp（ls、cd等）:查看命令是什么
3. ll /bin： 查看所有的命令