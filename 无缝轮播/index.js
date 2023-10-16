//解决切换页面，导致setTimeout  更新不准确问题  visibilitychange  事件
const images = document.getElementById("images")

const imgList = images.children
imgList[0].classList.add("current")
imgList[1].classList.add("enter")
imgList[2].classList.add("enter")
let index = 0
let timeId = setInterval(() => {
    imgList[x(`${index}`)].classList.remove("current")
    imgList[x(`${index}`)].classList.add("leave")
    imgList[x(`${index}`)].addEventListener("transitionend", function() {
        imgList[x(`${index + 1}`)].classList.remove("leave")
        imgList[x(`${index + 1}`)].classList.add("enter")
    },{once: true})
    imgList[x(`${index +1}`)].classList.remove("enter")
    imgList[x(`${index +1}` )].classList.add("current")

    index  = index +1
},1000)

function x(n) {
    if(n > 2) {
        n = n % 3
    }
    return n
}


document.addEventListener("visibilitychange", function(){
    console.log(document.hidden,'document.hidden')
    if(document.hidden) {
        console.log(document.hidden,'document.hidden')
       window.clearInterval(timeId)
    }else {
        console.log("222")
        console.log(index,'index')
        timeId = setInterval(() => {
            imgList[x(`${index}`)].classList.remove("current")
            imgList[x(`${index}`)].classList.add("leave")
            imgList[x(`${index}`)].addEventListener("transitionend", function() {
                imgList[x(`${index + 1}`)].classList.remove("leave")
                imgList[x(`${index + 1}`)].classList.add("enter")
            },{once: true})
            imgList[x(`${index +1}`)].classList.remove("enter")
            imgList[x(`${index +1}` )].classList.add("current")

            index  = index +1
        },1000)
    }
})

