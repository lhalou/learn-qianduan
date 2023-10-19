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
```