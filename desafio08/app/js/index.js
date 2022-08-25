import { createElement , createLoad , styleLoad } from './funcs.js'

const root = document.getElementById('root')

const sec = createElement("section", root, "", {class:"sect"})

createLoad(sec, "cont1")

createLoad(sec, "cont2")

createLoad(sec, "cont3")

createElement("button", root, "My Stacks", {class:"button"})

const button = document.querySelector(".button")

button.addEventListener("click", () =>{

   styleLoad('.cont1', 70,"HTML 5", "#e34f26")

   styleLoad('.cont2', 79,"CSS 3", "#1577b4")

   styleLoad('.cont3', 60,"JavaScript", "#ead41c")
   
})



