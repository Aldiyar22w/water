let button = document.getElementById("button")
let input = document.getElementById("input")
let toDoContainer = document.getElementById("toDocontainer")


button.addEventListener("click", function(){
    var par = document.createElement("p")
    par.innerHTML = input.value
    toDoContainer.appendChild(par)
    par.addEventListener("click", function(){
        toDoContainer.removeChild(par)
    })
})