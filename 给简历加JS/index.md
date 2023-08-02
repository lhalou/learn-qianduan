### 加载的动画

1. 详见loading.html

### 滚动事件

1. 滚动事件：window.onscroll = function(){}
2. 滚动的高度：window.scrollY
3. 变化过度动画：transition： all 1s
4. 阴影：box-shadow
5. color可以继承

### border 从左往右出现

1. 不使用border实现，使用伪元素：after
```
div::after {
    content: "",
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: red;
    height: 3px;
    animation: menuSlide 3s;
}
@keyframes menuSlide {
    0% {
        width: 0%
    }
    100% {
        width: 100%
    }
}
```


### 绝对定位

1. 绝对定位的元素会自动换行，bug修复：white-space：nowrap;
2. 采用递归获取节点
3. 阻止默认行为：e.preventDefault()
4. a.href //获取的值是带http协议的
5. a.getAttribute("href") //用户写什么，获取到什么，不带协议
6. element.getBoundingClientReact //返回元素的大小及相对视口的位置
7. element.offsetTop: 元素距离浏览器窗口最顶端的距离
8. window.scrollTo(0 , element.offsetTop) // 移动到顶部

