### 1. Vue的声明周期

1. 创建
2. 初始化数据
3. 编译template
4. 挂载DOM
5. 渲染
6. 更新渲染
7. 卸载

- beforeCreate: 实例创建之前：初始化插件
- created： 实例创建完成：异步请求的获取， dom并没有生成
- beforeMount： 组件挂载之前： 
- mounted： 组件挂载完成： 异步请求获取， render dom更新 页面变化
- beforeUpdate： 数据发生变化，更新之前
- updated： 数据发生变化，更新之后
- beforeDestroy: 实例销毁之前
- destroyed: 实例销毁完成
- activated: keep-alive 组件激活
- deactivated: keep-alive 组件停用
- errorCaptured: 捕获实例的错误


### 块元素和行内元素的区别

1. 页面布局（pc端和移动端）
2. 概念：
    - 块级元素：默认独占一行，在页面中垂直排列，可以设置宽高和内外边距
    - 行内元素：在页面中同行排列，宽高是由内容决定
3. 行内元素和会计元素都有哪些？
    - 块级元素：`<p>,<div>,<table>,<ul>,<li>,<ol>,<h1>~<h6>....`
    - 行内元素：`<img>,<a>,<span>,<input>....`
4. 行内元素和块级元素转换：
    - `dispaly:inline`: 将块级元素转换为行内元素，
    - `display: block`: 将行内元素转换成块级元素
    - `display：inline-block`: 行内块元素，即拥有行内元素同行的特性，又拥有会计元素宽高特性
   
### src与href 的区别

1. 相同点
    - src和href都可以用来加载外部文件
2. 不同点：
    - href用在link和a标签上，src用在js和img标签上
    - 当浏览器遇到href的时候，会并行下载资源，不会停止对当前文档的处理
    - 当浏览器解析到src的时候，会暂停对当前文档的处理，直到资源下载完成或者处理完成
   
### 对盒模型的理解

1. 概念
    - 盒模型：css定义的所有元素都拥有像盒子一样的外形和空间，包括内容区，外边距，内边距和边框
2. 盒模型包括标准盒模型和ie盒模型（怪异模型）
    - 标准盒模型：width和height的的属性区域只包括内容区域
    - IE盒模型：width和height不仅包括内容区域，还包括padding和border
    - `box-sizing: border-box`： 设置为IE模型
    - `box-sizing: content-box`： 设置为标准模型
   
### 页面元素常见的水平居中的方式

1. 块元素外边距auto自动居中
    - 为块元素添加`margin：auto`属性，兼容性好，PC端常用技术
2. 内联元素text-align文本居中
    - 父元素设定`text-align: center`属性，子元素自动会居中，对大多数内联元素有效
3. 使用弹性盒布局：父元素添加弹性盒，控制子元素的水平位置居中
    - 父元素设置 `display: flex`,且添加`align-items: center;    justify-content: center;`, 子元素会自动垂直居中
4. transform移动+position绝对定位居中
    - 通过定位使元素左上角居中，在通过`transform:translate(-50%, -50%)`居中
5. 这些居中方式便可以解决开发中遇到的大部分居中问题，这就是我对常见居中方式的理解


### CSS优先级和权重是怎样的

1. css选择器的优先级
    - `!important > style >#id > .className > 派生选择器 > 群组选择器 > *(通配符选择器)`
2. css选择器的权重
    - 行内样式（1000） > id选择器（100） > class选择器(10) > 标签选择器（1） > 通用下选择器（0）

### 浏览器的内核有哪些

1. 浏览器内核的作用
    - 也称："渲染引擎"，用来解释网页语法并渲染到页面上，浏览器内核决定了浏览器该如何显示页面内容以及页面的格式信息
2. 常见的浏览器内核
    - IE浏览器内核：Trident内核，俗称IE内核
    - Chrome浏览器内核：统称为Chrome内核，以前是Webkit内核，现在是Blink内核
    - Firefox浏览器内核：Gecko内核，俗称Firefox内核
    - 苹果Safari浏览器内核：Webkit内核，特点是不受IE。Firefox内核的约束，比较安全
    - Opera浏览器内核：最初是自己的Presto内核，后来加入了谷歌大军，从是Webkit内核改到Blink内核
   
### 常见的浏览器兼容问题有哪些？

1. 浏览器兼容问题产生的原因：
    - 因为不同浏览器内核所支持的HTML等网页语言标准不同，以及用户客户端的环境不同造成的显示不一致，一般需要解决的问题主要是：IE6,,7,,8
2. 常见的兼容性问题：
    - 在ie6,7中没办法设置1px的高度的元素，解决方案：overflow:hidden;
    - 图片下方缝隙问题：解决方案：vertical-align: center
    - ie6中双倍边距的问题：给float元素添加display:inline
    - 可以采用css hack，为不同的样式添加不同的css前缀

### link和@import的区别

1. link是XHTML标签，除了加载CSS外，还可以定义RSS,@import只能加载css
2. link引用css时，在页面加载时同时加载，@import需要页面完全载入后加载，会出现闪屏
3. link是XHTML标签，无兼容性问题，@import是css2.1提出的，低版本浏览器不支持
4. link支持使用javascript控制DOM去改变样式，@import不支持


### 对cssom的理解


   
    

