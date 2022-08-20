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
}}document.createElement("div")


const calcBody =  createElement("section", root ,'', {class: "calcBody"})

createElement("input", calcBody ,'', {class: "input", disabled: "disabled"})

const input = document.querySelector(".input")


createElement("button", calcBody ,'AC',{class: "buttonReset"})
createElement("button", calcBody ,'',  {class: "buttonCalc"})
createElement("button", calcBody ,'%', {class: "buttonCalc"})
createElement("button", calcBody ,'1', {class: "buttonCalc","data-nun": '1'})
createElement("button", calcBody ,'2', {class: "buttonCalc","data-nun": '2'})
createElement("button", calcBody ,'3', {class: "buttonCalc","data-nun": '3'})
createElement("button", calcBody ,'x', {class: "buttonCalc"})
createElement("button", calcBody ,'4', {class: "buttonCalc","data-nun": '4'})
createElement("button", calcBody ,'5', {class: "buttonCalc","data-nun": '5'})
createElement("button", calcBody ,'6', {class: "buttonCalc","data-nun": '6'})
createElement("button", calcBody ,'-', {class: "buttonCalc"})
createElement("button", calcBody ,'7', {class: "buttonCalc","data-nun": '7'})
createElement("button", calcBody ,'8', {class: "buttonCalc","data-nun": '8'})
createElement("button", calcBody ,'9', {class: "buttonCalc","data-nun": '9'})
createElement("button", calcBody ,'+', {class: "buttonCalc"})
createElement("button", calcBody ,'0', {class: "buttonCalc","data-nun": '0'})
createElement("button", calcBody ,'.', {class: "buttonCalc","data-nun": '.'})
createElement("button", calcBody ,'=', {class: "buttonReset"})


const num = "1234567890."


num.split("").map( a =>{

const ola = document.querySelector(`[data-nun='${a}']`)


ola.addEventListener("click", ()=>{

   a === '.' 
   ?  a !== input.value.indexOf(".") 
   ?  console.log(a) 
   : a 
   : console.log("ola");


   typeof a == "number" ?  input.value = input.value + a : a
})
})


createElement("input", root ,'', {class: "ola" , type: "number"})

