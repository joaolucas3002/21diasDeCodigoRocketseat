const resetTimerValue = (val, numReset) => {
   if (val.value < 1) {
      val.value = numReset
   }
}

const setTimerSubtractionAndPadStart = (parseFloat) => (val) => {
   let num = parseFloat(val.value)
   num -= 1
   val.value = num.toString().padStart(2, '0')
}

const setFuncRenderTimer = (document, clearInterval, setInterval, timerSubtractionAndPadStart, resetTimerValue) => () => {
   const funcTimer = () => {
      const inputMin = document.querySelector('.setMinInitial')
      const inputSec = document.querySelector('.setSecInitial')

      let sec = inputSec.value
      let nim = inputMin.value
      if (sec <= 0) {
         nim <= 0 && nim <= 0 ? clearInterval(timerSetInterval) : inputSec
         nim > 0 ? timerSubtractionAndPadStart(inputMin) : inputMin
         nim > 0 || nim > 0 ? resetTimerValue(inputSec, '59') : inputSec
      } else {
         timerSubtractionAndPadStart(inputSec)
      }

      const button = document.querySelector('.button')

      if (button.dataset.status === 'stop') {
         timerSetInterval
      } else if (button.dataset.status === 'start') {
         clearInterval(timerSetInterval)
      }
   }
   const timerSetInterval = setInterval(funcTimer, 1000)
}

const setFuncStart = (document, parseFloat, alert, funcRenderTimer) => () => {
   const button = document.querySelector('.button')
   const inputMin = document.querySelector('.setMinInitial')
   const inputSec = document.querySelector('.setSecInitial')

   const timeValid = (input) => {
      return parseFloat(input.value) > parseFloat(input.max)
   }

   if (timeValid(inputMin)) {
      alert('valor maximo de minutos e 59')
      inputMin.value = '59'
   }

   if (timeValid(inputSec)) {
      alert('valor maximo de segundos e 59')
      inputSec.value = '59'
   }

   button.dataset.status = 'stop'
   button.textContent = 'stop'
   funcRenderTimer()
}

const setFuncStop = (document) => () => {
   const button = document.querySelector('.button')
   button.dataset.status = 'start'
   button.textContent = 'start'
}

const setFuncCreateElement = (document, Object, Array) => (typeDiv, ParentDiv, text, attribute) => {
   const element = document.createElement(typeDiv)

   text !== undefined && text !== '' ? element.append(text) : text

   attribute !== undefined && attribute !== '' ? Object.keys(attribute).map((a) => element.setAttribute(a, attribute[a])) : attribute

   ParentDiv !== undefined && ParentDiv !== '' ? ParentDiv.append(element) : ParentDiv

   return element
}

const setButtonReset = (document) => () => {
   const button = document.querySelector('.button')
   const inputMin = document.querySelector('.setMinInitial')
   const inputSec = document.querySelector('.setSecInitial')

   inputMin.value = '00'
   inputSec.value = '00'

   button.dataset.status === 'start'
   button.textContent = 'start'
}

const setButtonStartAndStop = (document, funcStart, funcStop) => () => {
   const button = document.querySelector('.button')
   const inputMin = document.querySelector('.setMinInitial')
   const inputSec = document.querySelector('.setSecInitial')

   inputMin.value = inputMin.value.padStart(2, '0')
   inputSec.value = inputSec.value.padStart(2, '0')

   const valTotal = inputMin.value != '00' || inputSec.value != '00'

   if (button.dataset.status === 'start' && valTotal) {
      funcStart()
   } else if (button.dataset.status === 'stop') {
      funcStop()
   }
}

const timerSubtractionAndPadStart = setTimerSubtractionAndPadStart(parseFloat)

const funcRenderTimer = setFuncRenderTimer(document, clearInterval, setInterval, timerSubtractionAndPadStart, resetTimerValue)

const funcStart = setFuncStart(document, parseFloat, alert, funcRenderTimer)

const funcStop = setFuncStop(document)

export const createElement = setFuncCreateElement(document, Object, Array)

export const buttonStartAndStop = setButtonStartAndStop(document, funcStart, funcStop)

export const buttonReset = setButtonReset(document)
