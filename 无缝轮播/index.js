const images = document.getElementById("images")
const imgList = images.children
imgList[0].classList.add("current")
imgList[1].classList.add("enter")
imgList[2].classList.add("enter")
let index = 0
setInterval(() => {
    imgList[x(`${index}`)].classList.remove("current")
    imgList[x(`${index}`)].classList.add("leave")
    imgList[x(`${index}`)].addEventListener("transitionend", function() {
        imgList[x(`${index + 1}`)].classList.remove("leave")
        imgList[x(`${index + 1}`)].classList.add("enter")
    },{once: true})
    imgList[x(`${index +1}`)].classList.remove("enter")
    imgList[x(`${index +1}` )].classList.add("current")

    index  = index +1
},1000 * (`${index}` + 1))

function x(n) {
    if(n > 2) {
        n = n % 3
    }
    return n
}




