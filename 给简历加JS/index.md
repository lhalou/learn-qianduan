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
