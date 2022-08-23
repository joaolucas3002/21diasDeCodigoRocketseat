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


createElement("h2", root ,  "Hello World", {class:"H2World"})