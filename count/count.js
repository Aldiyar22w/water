let counter = document.getElementById("counter")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let clean = document.getElementById("clean")

let count = 0

plus.addEventListener("click", function(){
    count++
    counter.textContent = count
   if(count > 0){
    counter.style.color = "green"
   }
})

minus.addEventListener("click", function(){
    count--
    counter.textContent = count
   if(count < 0){
    counter.style.color = "red"
   }
})

clean.addEventListener("click", function(){
    count = 0
    counter.textContent = count
   if(count == 0){
    counter.style.color = "black"
   }
})