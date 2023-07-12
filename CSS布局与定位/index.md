### 高度与文档流

1. wall haven： 背景图片推荐
2. div的高度由其内部文档流元素高度的总和决定的：（决定不等于相等）
3. 文档流：文档内元素的流动方向：
    - 内联元素从左往右流动
    - 块级元素从上往下流动，每个块都占满一行
    - word-break:break-all:文字换行
    - display:inline-block;
    - 内联元素的高度由字体和字体的行高决定的
   
### position：fixed

1. 会脱离文档流
2. 相对于窗口定位

### CSS三角形

1. background-position:center center ;背景图片居中
2. background-size:cover； 背景图片按比列缩放
3. 块级元素水平居中；margin: 0 auto;
4. 内联元素设置宽高没有效果
5. 内联元素设置宽高可以使用padding及line-height替换
6. 脱离文档流：绝对定位position:absolute;

### iconfont.cn的使用

1. css tricks shape： 很多css样式网站
2. display：inline-block：外边距不会合并
