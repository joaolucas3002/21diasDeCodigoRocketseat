import { createElement, createElementNS } from './funcs.js'

import { arraycreateQuiz } from './quiz.js'

const root = document.getElementById('root')

let value = -1

let placar = 0

function Quiz(root) {
   const secQuiz = createElement('section', root, '', { class: 'secQuiz' })

   const contText = createElement('section', secQuiz, '', { class: 'contText' })

   const contButton = createElement('section', secQuiz, '', { class: 'contButton' })

   createElement('div', contText, 'Dentro de qual elemento HTML colocamos o JavaScript?', { class: 'text' })

   createElement('button', contButton, '<js>', { class: 'button', 'data-states': 'false' })

   createElement('button', contButton, '<script>', { class: 'button', 'data-states': 'true' })

   createElement('button', contButton, '<javascript>', { class: 'button', 'data-states': 'false' })

   createElement('button', contButton, '<scripting>', { class: 'button', 'data-states': 'false' })

   const [...button] = document.querySelectorAll('.button')

   button.map((b, index) =>
      b.addEventListener('click', () => {
         const buttonclick = button[index]

         const stateButton = buttonclick.getAttribute('data-states')

         button.map((e) => e.classList.toggle('states'))

         setTimeout(() => button.map((e) => e.classList.toggle('states')), 1000)

         value += 1
         placar += stateButton == 'true' ? 1 : 0

         console.log(value < arraycreateQuiz.length + 1, value)
         if (value < arraycreateQuiz.length) {
            const createQuiz = arraycreateQuiz[value]

            createQuiz(index)
         }

         if (value === arraycreateQuiz.length) {
            setTimeout(() => {
               console.log('ola')
               const calue = root.querySelector('.secQuiz')
               if (calue !== null) {
                  calue.remove()
               }

               PageEnd(placar, arraycreateQuiz.length)

               const endbutton = document.querySelector('.endbutton')

               endbutton.addEventListener('click', () => {
                  const calue = root.querySelector('.endContQuiz')
                  if (calue !== null) {
                     calue.remove()
                  }
                  value = 0
                  placar = 0
                  Quiz(root)
               })
            }, 1001)
         }
      }),
   )
}

Quiz(root)

function PageEnd(placar, arrayQuizLength) {
   const endContQuiz = createElement('section', root, '', { class: 'endContQuiz' })

   const contText = createElement('section', endContQuiz, `Parabéns`, { class: 'endContText' })

   const punctuation = createElement('span', endContQuiz, `Você acertou ${placar} de ${arrayQuizLength + 1} perguntas `, { class: 'punctuation' })

   const contButton = createElement('button', endContQuiz, 'Reiniciar', { class: 'endbutton' })
}
