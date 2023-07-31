### 阻止手机980 ，适配手机

1. `<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
   `
2. 添加以上代码，web页面转手机页面的时候，就不会缩放

### touch事件

1. 手机上没有鼠标事件，不能监听mouse，但是可以模拟mousedown事件，要监听touch

### 判断是手机还是web

1. 特性检测
2. document.body.ontouchstart !== undefined  触屏设配（手机）


