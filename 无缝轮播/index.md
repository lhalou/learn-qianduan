### 事件模型

1. xxx.onclick=function(){}后面的会覆盖前面的
2. addEventListener是队列，可重复创建，并且是先进先出
3. removeEventListener()出队
4. addEventListener第三个参数，是否冒泡
5. 从上到下： 捕获阶段
6. 从下到上： 冒泡阶段
7. 调用元素本身不区分冒泡还是捕获，执行顺序和代码写入的顺序有关