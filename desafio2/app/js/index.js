const root  = document.getElementById("root")

const createElement = setFuncCreateElement(document,Object, Array)

function setFuncCreateElement(document,Object, Array) {
   return (typeDiv, ParentDiv, text, attribute) =>{
   const element = document.createElement(typeDiv)

   text !== undefined && text !== '' ? element.append(text) : text

   attribute !== undefined && attribute !== ''
      ? Object.keys(attribute).map((a) => element.setAttribute(a, attribute[a]))
      : attribute

   ParentDiv !== undefined && ParentDiv !== ''
      ? ParentDiv.append(element)
      : ParentDiv

      return element
}}


const div  = createElement('div',root,"",{class: "content"})


createElement('div',div,"",{class: "contentButton"})

createElement('div',div,"",{class: "button"})

createElement('div',div,"",{class: "clickButton"})

const button = document.querySelector(".button")

const contentButton = document.querySelector(".contentButton")

const clickButton = document.querySelector(".clickButton")



clickButton.addEventListener("click",()=>{
   contentButton.classList.toggle("day")
   button.classList.toggle("day")
   root.classList.toggle("day")
})