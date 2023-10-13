const button = document.getElementById("button")
const popover = document.getElementById("popover")
const wrapper = document.getElementById("wrapper")
button.addEventListener("click", function(e) {
    console.log('执行了吗？？？')
    e.stopPropagation()//阻止事件冒泡
    console.log(e,'e')
    console.log(e.target,'e.target')
    popover.style.display="block"
    function hide () {
        console.log("执行")
        popover.style.display="none"
        document.removeEventListener("click", hide)
    }
    document.addEventListener("click",hide , false)
})
wrapper.addEventListener("click", function(e) {
    //只要阻止向上冒泡，就不会执行document.onclick
    // e.preventDefault() //阻止默认事件会导致 checkbox 无法选中
    e.stopPropagation()//阻止事件冒泡
})
