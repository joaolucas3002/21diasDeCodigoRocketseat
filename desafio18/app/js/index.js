import { createElement, RemoveElement, createElementNS } from './func.js'

const root = document.querySelector('#root')

const header = createElement('header', root)

const secHeader = createElement('section', header, '', { class: 'secHeader' })

const svgHeader = createElementNS('svg', secHeader, { viewBox: '0 0 32 32' })

createElementNS('path', svgHeader, { d: 'M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z' })

const formHeader = createElement('form', secHeader, '', { class: 'formHeader' })

createElement('input', formHeader, '', { class: 'inputHeader', type: 'text', placeholder: '' })

const button = createElement('button', formHeader, '', { class: 'btn' })

const svg = createElementNS('svg', button, { viewBox: '0 0 31.5 31.5' })

createElementNS('path', svg, {
   fill: 'inherit',
   d: 'M22.5 12.855a9.643 9.643 0 10-9.643 9.643 9.673 9.673 0 009.643-9.643zm.48 7.873l8.041 8.041a1.591 1.591 0 11-2.25 2.25l-8.041-8.041a12.331 12.331 0 01-7.873 2.738 12.858 12.858 0 1112.854-12.862 12.309 12.309 0 01-2.731 7.873z',
})

const main = createElement('main', root)

createGallery(main)

const footer = createElement('footer', root, 'Faça algo incrível')

const svgFooter = createElementNS('svg', footer, { viewBox: '0 0 32 32' })

createElementNS('path', svgFooter, { d: 'M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z' })

// events

const form = document.querySelector('form')

const input = document.querySelector('.inputHeader')

form.addEventListener('submit', (e) => {
   e.preventDefault()
   createGallery(main, input.value)
})

async function createGallery(ParentDiv, query, page) {
   RemoveElement(ParentDiv, '.secMain')

   const section = createElement('section', ParentDiv, '', { class: 'secMain' })
   const urlAPI = 'https://api.unsplash.com/search/photos/'

   const clientID = '?client_id=8R5bOJKwafvnz0prU7ysgpKd0MCU9NJc8UTegNjdHeo'

   const parameters = `&per_page=30&page=${page}&query=${query}`
   try {
      const ft = await fetch(`${urlAPI}${clientID}${parameters}`)

      const ftJson = await ft.json()

      const [...ftJsonRes] = ftJson.results

      if (ftJsonRes.length > 0) {
         createElement("div",section,`# ${query}`,{class:"Guery"})
         for (let i = 0; i < 3; i++) {
            createElement('section', section, '', { class: 'containerColumn' })
         }

         const [...column] = document.querySelectorAll('.containerColumn')

         ftJsonRes.map((e, i) => {
            if ((i + 1) % 3 === 0) {
               createImg(column[0], e.urls.regular, e.links.html)
            }
            if ((i + 2) % 3 === 0) {
               createImg(column[1], e.urls.regular, e.links.html)
            }
            if ((i + 3) % 3 === 0) {
               createImg(column[2], e.urls.regular, e.links.html)
            }
         })
      } else {
         createElement('h2', section, 'Busca não encontrada', { class: 'Erro' })
      }
   } catch (error) {
      createElement('h2', section, 'Busca não encontrada', { class: 'Erro' })
      console.error(error)
   }
}

function createImg(ParentDiv, src, href) {
   const containerImg = createElement('div', ParentDiv, '', { class: 'containerImg' })

   const link = createElement('a', containerImg, '', { class: 'linkImg', href: href, target: '_blank' })

   const svg = createElementNS('svg', link, { viewBox: '0 0 32 32' })

   createElementNS('path', svg, { d: 'M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z' })

   createElement('img', containerImg, '', { src: src, class: '' })
}
