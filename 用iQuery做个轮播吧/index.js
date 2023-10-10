//思路： 图片滚来滚去
// const button1 = document.getElementById("pageOne");
// const button2 = document.getElementById("pageTwo");
// const button3 = document.getElementById("pageThree");
const images = document.getElementsByClassName("images")[0]
// button1.onclick = function() {
//     images.classList.remove("pageTwo")
//     images.classList.remove("pageThree")
//     images.classList.add("pageOne")
// }
// button2.onclick = function() {
//     //需要移除上面的class
//     images.classList.remove("pageOne")
//     images.classList.remove("pageThree")
//     images.classList.add("pageTwo")
// }
// button3.onclick = function() {
//     images.classList.remove("pageOne")
//     images.classList.remove("pageTwo")
//     images.classList.add("pageThree")
// }

const parentNode= document.getElementsByClassName("operator")[0]
const childrenList = parentNode.children
for(let i =0; i < childrenList?.length; i++ ) {
    const width = i * (-300)
    console.log(width,'width')
    // childrenList[i].addEventListener("click", function() {
    //     images.style.transform=`translateX(${width}px)`
    // })
    childrenList[i].onclick=function() {
        console.log('2324')
        images.style.transform=`translateX(${width}px)`
    }
}
let n = 0

setInterval(() => {
    n = n+ 1
    const width = n % 3  * (-300)
    images.style.transform=`translateX(${width}px)`
}, 1000)