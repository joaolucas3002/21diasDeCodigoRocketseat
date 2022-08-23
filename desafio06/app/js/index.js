import { createElement, buttonStartAndStop, buttonReset } from './funts.js'

const root = document.getElementById('root')

createElement('h1', root, 'Timer', { class: 'title' })

const sec = createElement('section', root, '', { class: 'setTimer' })

createElement('input', sec, '', {
   class: 'setMinInitial',
   type: 'tel',
   min: '0',
   max: '59',
   value: '00',
   maxLength: '2',
})

createElement('input', sec, '', {
   class: 'setSecInitial',
   type: 'tel',
   min: '0',
   max: '59',
   value: '00',
   maxLength: '2',
})

createElement('div', sec, ':', { class: 'twoPoints' })

createElement('button', sec, 'start', {
   class: 'button',
   'data-status': 'start',
})
createElement('button', sec, 'reset', { class: 'reset', 'data-status': 'reset' })

const button = document.querySelector('.button')
const reset = document.querySelector('.reset')

button.addEventListener('click', buttonStartAndStop)

reset.addEventListener('click', buttonReset)
