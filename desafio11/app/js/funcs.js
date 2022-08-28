
const setFuncCreateElement = (document,Object, Array)=> {
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

const setFuncCreateElementNS = (document,Object, Array)=> {
   return (typeDiv, ParentDiv, attribute) =>{
   const element = document.createElementNS("http://www.w3.org/2000/svg",typeDiv)

   attribute !== undefined && attribute !== ''
      ? Object.keys(attribute).map((a) => element.setAttribute(a, attribute[a]))
      : attribute

   ParentDiv !== undefined && ParentDiv !== ''
      ? ParentDiv.append(element)
      : ParentDiv

      return element
}}


export const createElementNS = setFuncCreateElementNS(document,Object, Array)

export const createElement = setFuncCreateElement(document,Object, Array)



