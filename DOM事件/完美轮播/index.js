const images =  document.getElementById("images")
const img1 = document.getElementById("img1")
const img3 = document.getElementById("img3")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
//克隆第一个和最后一个节点
const firstClone  = img1.cloneNode(true)
const lastClone  = img3.cloneNode(true)
//在imges的所有子元素最前面添加最后一张图片
images.prepend(lastClone)
//在images的所有元素的最后面添加一张图片
images.append(firstClone)
//解决一开始就是最后一张图片的问题
images.style.transform=  "translateX(-250px)"
let current  = 0 // 记录点击的索引

button1.onclick=(() => {
    console.log(current,'current') //此处的索引是上一次点击的索引
    if(current === 2) {
        console.log("进来了吗")
        images.style.transform=  "translateX(-1000px)"
            //将假的第一张图片 替换成 真的  纯在替换bug
        // images.addEventListener("transitionend", function() {
        //     images.style.transform=  "translateX(-250px)"
        //
        // })
    }else {
        images.style.transform=  "translateX(-250px)"
    }
    if(current === 1) {
        //表示从第二张到一张
    }

    current = 0 // 点击之后，索引是 0
})
button2.onclick=(() => {
    images.style.transform=  "translateX(-500px)"
    current = 1 // 点击之后，索引是 1
})
button3.onclick=(() => {
     console.log(current,'current')
    if(current === 0) {
        console.log('2222')
        images.style.transform=  "translateX(0px)"
    }else {
        images.style.transform=  "translateX(-750px)"
    }

    current = 2 // 点击之后，索引是 1
})