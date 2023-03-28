let button = document.getElementById("button")
let body = document.querySelector("body")
let color = ["red", "yellow", "green", "blue", "pink", "orange", "violet", "grey", "purple"]

body.style.backgroundColor = "black"

button.addEventListener("click", function(){
    let colorIndex = parseInt(Math.random() * color.length)
    body.style.backgroundColor = color[colorIndex]
})