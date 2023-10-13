const div = document.getElementsByTagName("div")
const div6 = document.getElementById("div6")
console.log(div,'div')
var n = 0
for(let i = 5; i > -1; i-- ) {
    let index = i
    div[index].addEventListener("click", function(e){
        console.log(e.currentTarget,'e.target')
        setTimeout(function(){
            console.log(e,'e')
            div[index].classList.add("active")
        }, 1000 * n)
        n = n+ 1

    },false)
}


