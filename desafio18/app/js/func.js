const setFuncCreateElement = (document, Object) => (typeDiv, ParentDiv, text, Atributes) => {
   const element = document.createElement(typeDiv)

   text !== undefined && text !== '' ? element.append(text) : element

   Atributes !== undefined && Atributes !== '' ? Object.keys(Atributes).map((e) => element.setAttribute(e, Atributes[e])) : element

   ParentDiv !== undefined && ParentDiv !== '' ? ParentDiv.append(element) : element

   return element
}

const setFuncCreateElementNS = (document, Object) => (typeSvg, ParentDiv, Atributes) => {
   const element = document.createElementNS('http://www.w3.org/2000/svg', typeSvg)

   Atributes !== undefined && Atributes !== '' ? Object.keys(Atributes).map((e) => element.setAttribute(e, Atributes[e])) : element

   ParentDiv !== undefined && ParentDiv !== '' ? ParentDiv.append(element) : element

   return element
}

export const RemoveElement = (ParentDiv, attribute) => {
   let element = ParentDiv.querySelector(attribute)

   if (element) element.remove()
}

export const createElement = setFuncCreateElement(document, Object)

export const createElementNS = setFuncCreateElementNS(document, Object)
