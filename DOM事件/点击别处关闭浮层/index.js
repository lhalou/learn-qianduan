const button = document.getElementById("button")
const popover = document.getElementById("popover")
const wrapper = document.getElementById("wrapper")
button.addEventListener("click", function(e) {
    console.log('执行了吗？？？')
    e.stopPropagation()//阻止事件冒泡
    console.log(e,'e')
    console.log(e.target,'e.target')
    popover.style.display="block"
})
wrapper.addEventListener("click", function(e) {
    //只要阻止向上冒泡，就不会执行document.onclick
    e.stopPropagation()//阻止事件冒泡
})
document.addEventListener("click", function() {
    popover.style.display="none"
    console.log('none')
})