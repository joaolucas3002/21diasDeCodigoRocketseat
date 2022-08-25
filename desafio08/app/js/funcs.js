
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

const setCreateLoad = (createElement, createElementNS) => (parentDiv,nameSection) =>{

   const section = createElement("section",parentDiv,"",{class:`section  ${nameSection}`})

   const cont = createElement('section', section, '', { class: `container` })

   createElement('section', section, '', { class: `NameLanguage` })

   const svg = createElementNS('svg', cont, '')

   createElementNS('circle', svg, { cx: '70', cy: '70', r: '70' })

   createElementNS('circle', svg, { cx: '70', cy: '70', r: '70' })

   createElement('div', cont, '0%', { class: `numValue` })
}

const  setStyleLoad = (document) => (contSetec, value,Text, color) => {

   const language = document.querySelector(`${contSetec} .NameLanguage`)

   const circle = document.querySelector(`${contSetec} circle:nth-child(2)`)

   const numVal = document.querySelector(`${contSetec} .numValue`)

   language.textContent = Text

   numVal.textContent = `${value}%`

   circle.style.stroke = color;
   circle.style.transition =` stroke-dashoffset ${ value * 50}ms linear`;

   circle.style.strokeDashoffset = `${440 - 4.4 * 0}`

   setTimeout(() => {
      circle.style.strokeDashoffset = `${440 - 4.4 * value}`
   },10)   
}

export const styleLoad = setStyleLoad(document)

export const createElementNS = setFuncCreateElementNS(document,Object, Array)

export const createElement = setFuncCreateElement(document,Object, Array)

export const createLoad = setCreateLoad(createElement, createElementNS)


