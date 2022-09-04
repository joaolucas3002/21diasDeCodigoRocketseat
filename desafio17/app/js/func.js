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

const setFuncCreateSecCheck = (createElement) => (ParentDiv, text, rule) => {
   const secCheck = createElement('section', ParentDiv, text, { class: 'secCheck' })

   const check = createElement('div', secCheck, '', { class: 'check', 'data-rule': rule })

   check.addEventListener('click', () => {
      check.classList.toggle('true')
   })
}

const SetFuncRandomValue = (Math) => (value) => {
   const randomIndex = Math.random() * value.length

   return value[Math.floor(randomIndex)]
}

const setFuncCreatePassword = (document, randomValue, Validation) => (NumPassword) => {
   const [...check] = document.querySelectorAll('.check.true')

   const rules = {
      lowerCases: 'abcdefghijklmnopqrstuvwxyz',
      upperCases: 'ABCDEFGHIJLMNOPQRSTUVWXYZ',
      specialCharacters: '!@#$%^&*()+?><:{}[]',
      numbers: '0123456789',
   }

   const arrayRules = check.map((e) => {
      return rules[e.getAttribute('data-rule')]
   })

   const password = []

   for (let i = 0; i < NumPassword; i++) {
      password.push(randomValue(arrayRules.join('').split('')))
   }

   return Validation(password, arrayRules) ? password.join('') : createPassword(NumPassword)
}

export function Validation(value, rules) {
   return value.length < rules.length ? true : rules.every((rule) => rule.split('').some((index) => value.includes(index)))
}

export const RemoveElement = (ParentDiv, attribute) => {
   let element = ParentDiv.querySelector(attribute)

   if (element) element.remove()
}



export const createElement = setFuncCreateElement(document, Object)

export const createElementNS = setFuncCreateElementNS(document, Object)

export const createSecCheck = setFuncCreateSecCheck(createElement)

export const randomValue = SetFuncRandomValue(Math)

export const createPassword = setFuncCreatePassword(document, randomValue, Validation)
