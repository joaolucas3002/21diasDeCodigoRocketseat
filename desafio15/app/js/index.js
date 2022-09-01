import { createElement, createElementNS, RemoveElement , getWeather , createCard } from './funcs.js'

const root = document.getElementById('root')

//getWeather('recife')

const main = createElement('main', root, '', { class: 'day' })

createElement('h1', main, 'Previsão do tempo')

createElement('p', main, 'Descubra qual a previsão do tempo para hoje', { class: 'description' })

const form = createElement('form', main, '', { method: 'get' })

createElement('input', form, '', { type: 'text', placeholder: 'Escreva o nome da cidade' })

const button = createElement('button', form, '', { class: 'btn' })

const svg = createElementNS('svg', button, { viewBox: '0 0 31.5 31.5' })

createElementNS('path', svg, {
   fill: 'inherit',
   d: 'M22.5 12.855a9.643 9.643 0 10-9.643 9.643 9.673 9.673 0 009.643-9.643zm.48 7.873l8.041 8.041a1.591 1.591 0 11-2.25 2.25l-8.041-8.041a12.331 12.331 0 01-7.873 2.738 12.858 12.858 0 1112.854-12.862 12.309 12.309 0 01-2.731 7.873z',
})


form.addEventListener('submit', (e) => {
   e.preventDefault()
   const input = form.querySelector('input[type="text"]')

   const inputVal = input.value

   const obj = getWeather(inputVal.toLowerCase())

   createCard(main, obj)
})
