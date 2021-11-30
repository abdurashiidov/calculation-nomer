// const value = document.querySelector(".narhi")
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const finnally = document.querySelector(".final")

let defaults = 50
let ozgaruvchi = 50
minus.disabled = true 

minus.addEventListener("click", () => {
    if(ozgaruvchi == defaults){
        minus.disabled = true
    } else{
        ozgaruvchi -= defaults
    }
    finnally.textContent = ozgaruvchi
})

plus.addEventListener("click", () => {
    ozgaruvchi += defaults
    finnally.textContent = ozgaruvchi
})