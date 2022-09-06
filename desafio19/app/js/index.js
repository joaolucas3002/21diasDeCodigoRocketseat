import { createElement, RemoveElement, createElementNS, createCard, getEmojis } from './func.js'

const root = document.querySelector('#root')

const header = createElement('header', root)

const form = createElement('form', header)

const buttonForm = createElement('button', form, '', { class: 'buttonForm' })

const svg = createElementNS('svg', buttonForm, { viewBox: '0 0 31.5 31.5' })

createElementNS('path', svg, {
   fill: 'inherit',
   d: 'M22.5 12.855a9.643 9.643 0 10-9.643 9.643 9.673 9.673 0 009.643-9.643zm.48 7.873l8.041 8.041a1.591 1.591 0 11-2.25 2.25l-8.041-8.041a12.331 12.331 0 01-7.873 2.738 12.858 12.858 0 1112.854-12.862 12.309 12.309 0 01-2.731 7.873z',
})

createElement('input', form, '', { class: 'inputForm', type: 'search' })

const main = createElement('main', root)

const allEmoji = 'https://emoji-api.com/emojis?access_key=b84f3ba731a71dfe9a631c4f169a6a4328ad73dc'

const search = (name) => `https://api.emojisworld.fr/v1/search?q=${name}`

const categories = 'https://api.emojisworld.fr/v1/categories'

const random = 'https://api.emojisworld.fr/v1/random'

createCard(getEmojis(random), main)

form.addEventListener('submit', (e) => {
   e.preventDefault()
   const input = form.querySelector('input')
   input.value !== '' && input.value ? createCard(getEmojis(search(input.value)), main) : main
})

// funcs

async function mapFet(process) {
   const arrayCategories = await process
   arrayCategories.map((e) => {
      createCard(getEmojis(search(e.name)), main)
   })
}
