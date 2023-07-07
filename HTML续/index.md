### HTML续

1. 空元素：`<img /> 、 <input />、<meta/>、<link/>、<hr/>、<br/>、<col>、<colgroup />`
2. HTML5推荐：不需要写自闭和
3. `noScript`：作用：当浏览器不支持script就显示noScript的内容
4. 浏览器可以禁用支持script
5. 可替换标签：可替换元素的展现不是由css来控制的，这些元素是一类外观渲染独立于css的外部对象，自带宽高属性，`img,object，video,表单元素`
6. contenteditable=true:div的内容是柯编辑的`<div contenteditable="true">怒海</div>`

### iframe

1. a标签的target = "xxx"属性表示：a标签打开的链接要name="xxx"的iframe中打开

### a标签

1. _blank: 在空窗口打开
2. _self：在自己当前窗口打开
3. _parent：在父级窗口打开
4. _top：在顶级窗口打开
5. a标签的download属性：表示这个链接是下载的，不是用来展示的
6. 是否可以下载由http的响应决定的：`Content-type:application/octet-stream`,或者在a标签上添加download属性，强制浏览器下载
7. a标签的href属性
```angular2html
<a href="qq.com" />
//不会打开qq.com，因为qq.com是一个相对地址
<a href="//qq.com" />
//当前文件是什么协议， //qq.com就是什么协议
<a href="xxx.html" />
//只以目录为参考
<a href="#" />
//使用a标签，并且不跳转
<a href="" />
//会有请求，会刷新页面，跳转到自身
<a href="JavaScript:;" />
//点击之后什么也不做的a标签
```
8. 锚点是不发请求的，锚点是页面内的跳转
9. a标签没有href就会变成span，样式上表现为：没有默认样式蓝色及下划线

### 工具

1. npm i -g http-server
2. http-server 
3. 以上就可以开启一个服务器
4. http-server -c -1 :不使用缓存开启服务器