### 概述

1. HTTP:超文本传输协议
2. WWW:万维网
3. curl + 命令

### 李爵士

发明者：李爵士
1. URI: 网址
2. HTML: 超文本标记语言，主要用于页面跳转
3. URL作用：访问页面，HTTP作用：下载页面，HTML作用：看懂页面
4. 还发明了服务器，浏览器，网页

### URI

1. 统一资源标识符
2. 分为URL（统一资源定位符）和URN（统一资源名称）,我们一般使用URL作为网址
3. ![image.png](https://upload-images.jianshu.io/upload_images/5628037-152854c8d4304d06.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
4. www.baidu.com 和baidu.com 不是同一个域名，只是共有一个二级域名
5. .com顶级域名
6. baidu二级域名
7. www三级域名
8. 路径和文件没有任何关系

### DNS

1. 域名系统
2. 给一个域名输出对应的IP
3. nslookup baidu.com: 查看服务器
   ![image.png](https://upload-images.jianshu.io/upload_images/5628037-c786e7fcc3007b2a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
4. 可以绕过DNS自己指定ip：sudo vi /etc/hosts

### Server+Client+HTTP

1. 浏览器负责发起请求
2. 服务器在80端口接受请求
3. 服务器负责返回响应
4. 浏览器负责想在响应内容

HTTP的作用就是指导浏览器和服务器如何进行沟通

### curl

1. `curl -s -v -H "www.baodu.comsadnjsfnweknfknkasnk`
2. 路径包含查询字符串，不包含锚点
3. content-type：指定了响应数据的类型，常见的值为`aplication/x-www-form-urlencoded`
4. 



