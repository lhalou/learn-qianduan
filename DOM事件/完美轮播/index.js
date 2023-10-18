const images =  document.getElementById("images")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
let current  = 0 // 记录点击的索引
button1.onclick=(() => {
    console.log(current,'current') //此处的索引是上一次点击的索引
    if(current === 2) {
        //表示从最后一张到一张
    }
    if(current === 1) {
        //表示从第二张到一张
    }

    images.style.transform=  "translateX(0px)"
    current = 0 // 点击之后，索引是 0
})
button2.onclick=(() => {
    images.style.transform=  "translateX(-250px)"
    current = 1 // 点击之后，索引是 1
})
button3.onclick=(() => {
    if(current === 0) {
        //表示直接从第一张到最后一张
    }
    images.style.transform=  "translateX(-500px)"
    current = 2 // 点击之后，索引是 1
})