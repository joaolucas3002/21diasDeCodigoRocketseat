import { createElement, RemoveElement, createElementNS } from './func.js'

import { infoCards } from './infos.js'

const root = document.querySelector('#root')

const main = createElement('main', root)

const contProject = createElement('article', main, '', { class: 'container' })

createElement('h1', contProject, 'Desafio de 21 dias de codigo')

createElement(
   'p',
   contProject,
   'O intuito do desafio e programar por pelo menos 1h todos os dias, durante 21 dias para criar o habito de programar diariamente . Publicar o resultado de cada projeto nas redes sociais, com a hashtag #21DiasDeCodigo e marcando o perfil da Rocketseat e os marmiteiros também adiciona a hashtag #SouMarmiteiro e marcam o perfil da Jake.',
   { class: 'comciderations' },
)

const contChalls = createElement('article', main, '', { class: 'container cards' })

createElement('h2', contChalls, 'Projetos', { class: 'conTitle' })

const challsCont = createElement('section', contChalls, '', { class: 'challsCont' })

createCards(infoCards, challsCont)

function createCards(values, ParentDiv) {
   values.forEach((e) => {
      const cont = createElement('article', ParentDiv, '', { class: 'contCard' })

      const sec = createElement('section', cont, '', { class: 'challContainer' })

      const challData = createElement('div', sec, '', { class: 'challData' })

      createElement('button', challData, '', { class: 'btnExpand' })

      createElement('img', challData, '', { src: e?.img, class: 'challImg' })

      createElement('a', challData, e?.title, { class: 'challTitle', href: e?.href, target: '_blank' })

      createElement('h3', sec, e?.nameChall, { class: 'nameChall' })

      createElement('span', sec, e?.description, { class: 'challDes' })
   })
}

const challContainer = document.querySelectorAll('.challContainer')

challContainer.forEach((e, index) => {
   e.classList.remove('disabled')

   const btn = e.querySelector('.btnExpand')

   btn.focus()

   btn.addEventListener('click', () => {
      challContainer.forEach((e, i) => {
         i !== index ? e.classList.remove('disabled') : e
      })

      e.classList.toggle('disabled')
   })
})
