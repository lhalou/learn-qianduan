### 知识点

1. form表单一旦提交，就会刷新当前页面
2. 解决办法：当前页面给一个iframe，刷新内容在iframe里面，页面就不会刷新了或者img，img 的src属性
3. link,img,script,a标签等都可以发送请求
4. 用图片模拟发请求（服务器返回的必须是图片，浏览器限制)
```
let image = document.createElement("img")
ing.src = "/pay"
//缺点： get请求
image.onload = function(){
    //表示成功
}
image.onerror = function(){
    //表示失败
}
//通过状态码 查看 请求失败与成功
statusCode //状态码
widnow.location.reload() //刷新页面
```
5. script 发送请求 ,不用返回图片，请求快，但是script会执行
```
const script = document.createElement("script")
script.src = "/pay"
//由于scipr他会执行，那么就不需要监听onload
document.appendChild(script)
    //表示成功
}
script.onload = function(){
    //表示成功
}
script.onerror = function(){
    //表示失败
}
reponse.setHeader("Content-Type","application/javascript")
//服务器返回一个在浏览器执行的代码
response.write("alert("success")")
//每次执行一次document.appendChild就会在DOM结构中插入一个script标签
e.currentTarget.remove()
```
6. **script不受域名限制**
7. 先有JSONP 再有 axios
8. callback
9. 不同的端口也属于不同的网站
10. 耦合不好，需要解耦
11. script标签不受同源策略的限制，所以可以实现两个网站之间的交流
12. axios受同源策略限制

### 什么是JSONP

1. 请求方创建script,scr指向响应方，同时传一个查询参数?callback=xxx,
2. 响应方根据查询参数callback构造形如：
    - xxx.call(undefined,"数据")
    - xxx("数据")
3. 浏览器接收到响应，就会执行xxx("数据")
4. 那么请求方就知道了他要的数据
5. JSONP为什么不支持post请求：因为script的src只能写入URl,可以写入get数据，没办法写post数据