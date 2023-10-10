//思路： 图片滚来滚去
const button1 = document.getElementById("pageOne");
const button2 = document.getElementById("pageTwo");
const button3 = document.getElementById("pageThree");
const images = document.getElementsByClassName("images")[0]
button1.onclick = function() {
    images.style.transform = "translateX(0)"
}
button2.onclick = function() {
    images.style.transform = "translateX(-300px)"
}
button3.onclick = function() {
    images.style.transform = "translateX(-600px)"
}