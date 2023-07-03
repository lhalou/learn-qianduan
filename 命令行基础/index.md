### 哪些系统提供了命令行

1. Windows的命令提示符CMD和Git Base
2. Linux（Ubuntu）的终端
3. Unix(macOS)的终端
4. ~ ：用户目录
5. .: 当前目录
6. .. :父目录
7. / :整个硬盘

### 命令行基础

1. 创建目录：mkdir
2. 删除：rm
3. 移动/重命名：mv
4. 复制：cp
5. 罗列：ls
6. 改变目录：cd
7. touch：创建文件
8. rm -rf xxx :删除目录
9. rm -f yyy / rm yyy: 删除文件
10. mv 1.txt 2.txt :重命名

###  绝对路径与相对路径的区别

1. 以 / 开头的路径就是绝对路径

### 常见的自带命令

1. pwd：显示当前目录
2. mkdir -p "路径"
3. whoami: 我是谁
4. ls -a 路径: 查看所有的目录
5. ls -l ：显示更多的信息，不显示隐藏文件
6. ls -al： 显示更多信息，并且显示隐藏文件
7. echo "hello" > 1.txt: 创建文件
8. echo "1" > !文件路径： 强制创建文件
9. echo "1" >> 文件路径: 追加内容
10. touch: 创建文件及改变文件的更新时间
11. cp 1.txt 2.txt :复制内容
12. cp -r 源目录 目标目录： 复制目录
13. tree: 查看目录结构
14. In -s 真实文件 链接：建立软链接
15. curl -L xxxxxx： 下载文件
16. df -kh: 磁盘占用
17. du -sh . :当前目录大小
18. du -h: 各文件大小

### Git

### 配置github

1. git config --global user.name 名字
2. git config --global user.email 邮箱
3. 