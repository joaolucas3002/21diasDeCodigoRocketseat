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

const voltar = document.querySelector('.voltar')

voltar.addEventListener('click',()=>window.history.back())

console.log(voltar);

//window.history.go(-1)