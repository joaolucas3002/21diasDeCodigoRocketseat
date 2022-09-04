import { createElement, RemoveElement, createElementNS, createPassword, createSecCheck } from './func.js'

const root = document.querySelector('#root')

const section = createElement('section', root, '', { class: 'sec' })

const secPassword = createElement('section', section, '', { class: 'secPassword' })

const copyButton = createElement('button', secPassword, '', { class: 'copyButton' })

const svgCopy = createElementNS('svg', copyButton, { viewBox: '12 10 42 42' })

createElementNS('path', svgCopy, {
   d: 'M37.016,31.555l-6.57-6.569L30,25.431V25h-7c-1.104,0-2,0.896-2,2v18c0,1.104,0.896,2,2,2h12c1.104,0,2-0.896,2-2V32 h-0.432L37.016,31.555z M30,27.46L34.54,32H30V27.46z M35,45H23V27h5v5c0,1.104,0.896,2,2,2h5V45z',
})

createElementNS('path', svgCopy, {
   d: 'M44.016,23.555l-6.57-6.569L37,17.431V17h-7c-1.104,0-2,0.896-2,2v4h2v-4h5v5c0,1.104,0.896,2,2,2h5v11h-3v2h3 c1.104,0,2-0.896,2-2V24h-0.432L44.016,23.555z M37,24v-4.54L41.54,24H37z',
})

const password = createElement('input', secPassword, '', { class: 'password', type: 'text', readonly: 'readonly', value: '40028922' })

const secnumPassword = createElement('section', section, 'Numero de Caracteres', { class: 'secnumPassword' })

createElement('input', secnumPassword, '', { type: 'number', value: '8', class: 'numPassword' })

createSecCheck(section, 'Letas Minúsculas', 'lowerCases')

createSecCheck(section, 'Letras Maíusculas', 'upperCases')

createSecCheck(section, 'Numeros', 'numbers')

createSecCheck(section, 'Simbolos', 'specialCharacters')

const btnPassword = createElement('button', section, 'Random Password', { class: 'btnPassword' })

// events

btnPassword.onclick = () => {
   const numPassword = document.querySelector('.numPassword')
   const num = numPassword.value <= 0 ? 0 : numPassword.value
   password.value = createPassword(num)
}

copyButton.addEventListener('click', () => {
   const password = document.querySelector('.password')
   navigator.clipboard.writeText(password.value)
})
