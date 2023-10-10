//思路： 图片滚来滚去
const button1 = document.getElementById("pageOne");
const button2 = document.getElementById("pageTwo");
const button3 = document.getElementById("pageThree");
const images = document.getElementsByClassName("images")[0]
button1.onclick = function() {
    images.classList.remove("pageTwo")
    images.classList.remove("pageThree")
    images.classList.add("pageOne")
}
button2.onclick = function() {
    //需要移除上面的class
    images.classList.remove("pageOne")
    images.classList.remove("pageThree")
    images.classList.add("pageTwo")
}
button3.onclick = function() {
    images.classList.remove("pageOne")
    images.classList.remove("pageTwo")
    images.classList.add("pageThree")
}