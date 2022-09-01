const setFuncCreateElement = (document, Object, Array) => {
   return (typeDiv, ParentDiv, text, attribute) => {
      const element = document.createElement(typeDiv)

      text !== undefined && text !== '' ? element.append(text) : text

      attribute !== undefined && attribute !== '' ? Object.keys(attribute).map((a) => element.setAttribute(a, attribute[a])) : attribute

      ParentDiv !== undefined && ParentDiv !== '' ? ParentDiv.append(element) : ParentDiv

      return element
   }
}

const setFuncCreateElementNS = (document, Object, Array) => {
   return (typeDiv, ParentDiv, attribute) => {
      const element = document.createElementNS('http://www.w3.org/2000/svg', typeDiv)

      attribute !== undefined && attribute !== '' ? Object.keys(attribute).map((a) => element.setAttribute(a, attribute[a])) : attribute

      ParentDiv !== undefined && ParentDiv !== '' ? ParentDiv.append(element) : ParentDiv

      return element
   }
}

const Setstars =
   (createElement, createElementNS) =>
   (parentsDiv, munberStars, starsGood = 0) => {
      const container = createElement('section', parentsDiv, '', { class: 'containerStars' })

      for (let i = 0; i < munberStars; i++) {
         const svgStar = createElementNS('svg', container, { viewBox: '0 0 50 50' })
         createElementNS('polygon', svgStar, {
            points: '25,3.553 30.695,18.321 46.5,19.173   34.214,29.152 38.287,44.447 25,35.848 11.712,44.447 15.786,29.152 3.5,19.173 19.305,18.321 ',
         })
      }

      const [...stars] = container.querySelectorAll('svg')

      stars
         .filter((star, i) => i < starsGood)
         .map((e) => {
            e.classList.add('star')
         })

      for (let i = 0; i < starsGood; i++) {}
   }

const setCreateCard = (createElement, stars) => (parentDiv, obj) => {
   const containerCard = createElement('article', parentDiv, '', { class: 'card' })

   const cardLink = createElement('a', containerCard, '', { class: 'cardLink', href: `${obj.href}` })

   const secImg = createElement('section', cardLink, '', { class: 'containerImg' })

   createElement('img', secImg, '', { class: 'cardImg', src: obj.image })

   const containerInfo = createElement('section', cardLink, '', { class: 'containerInfo' })

   const secInformation = createElement('section', containerInfo, '', { class: 'secInformation' })

   createElement('h3', secInformation, `${obj.name}`, { class: '' })

   stars(secInformation, 5, obj.NumStars)

   const secProductValue = createElement('section', containerInfo, '', { class: 'secProductValue' })

   createElement('span', secProductValue, `R$ ${obj.originalProductValue}`, { class: 'originalProductValue' })

   createElement('span', secProductValue, `R$ ${obj.productValue}`, { class: 'productValue' })
}

const SetCreateResearch = (createElement, createElementNS) => (ParentDiv, action) => {
   const form = createElement('form', ParentDiv, '', { method: 'get', action: `${action}`, class: 'containerResearch' })

   createElement('input', form, '', { type: 'text', name: 'research' })

   const buttonResearch = createElement('button', form, '', '')

   const svg = createElementNS('svg', buttonResearch, { viewBox: '0 0 31.5 31.5' })

   createElementNS('path', svg, {
      fill: 'inherit',
      d: 'M22.5 12.855a9.643 9.643 0 10-9.643 9.643 9.673 9.673 0 009.643-9.643zm.48 7.873l8.041 8.041a1.591 1.591 0 11-2.25 2.25l-8.041-8.041a12.331 12.331 0 01-7.873 2.738 12.858 12.858 0 1112.854-12.862 12.309 12.309 0 01-2.731 7.873z',
   })
}

const setCreateIconHeader = (createElement, createElementNS) => (ParentDiv, link) => {
   const heart = createElement('div', ParentDiv, '', { href: '', class: 'basket' })
   const a = createElement('a', heart, '', { href: `${link}` })

   const svg = createElementNS('svg', a, { viewBox: '0 0 24 24' })

   createElementNS('path', svg, {
      d: 'M17.23 3.176c-1.921-.193-3.932.57-5.162 1.92L12 5.172l-.068-.076c-1.23-1.35-3.24-2.113-5.163-1.92-2.698.27-4.519 2.287-4.519 5.574 0 2.806 3.092 6.757 9.26 12.068a.75.75 0 00.986-.005c6.169-5.432 9.254-9.374 9.254-12.063 0-3.287-1.821-5.305-4.52-5.574zm-5.235 16.077l-.327-.287C6.385 14.306 3.75 10.839 3.75 8.75c0-2.517 1.238-3.889 3.168-4.082 1.791-.179 3.704.753 4.411 2.167a.75.75 0 001.342 0c.707-1.414 2.62-2.346 4.41-2.167 1.931.193 3.169 1.565 3.169 4.082 0 1.979-2.643 5.45-7.928 10.21l-.327.293z',
   })
}

const SetCreateIconBasket = (createElement, createElementNS) => (ParentDiv, link) => {
   const basket = createElement('div', ParentDiv, '', { href: '', class: 'basket' })

   const a = createElement('a', basket, '', { href: `${link}` })

   const svg = createElementNS('svg', a, { viewBox: '0 0 25 25' })

   createElementNS('path', svg, {
      'fill-rule': 'evenodd',
      d: 'M14.334 2.5l7.5 6.294h1.833a1 1 0 010 2h-.123l-1.492 11.362c-.14 1.058-1.001 1.971-2.283 1.971H4.901c-1.281 0-2.144-.913-2.283-1.971L1.123 10.794H1a1 1 0 110-2h1.833l7.5-6.294a2 2 0 014 0zm-2 2c.353 0 .684-.091.972-.252l5.417 4.546H5.944l5.418-4.546c.287.16.619.252.972.252zM3.14 10.794h18.386L20.07 21.895c-.018.133-.112.232-.3.232H4.901c-.188 0-.283-.1-.3-.232l-1.46-11.1zm14.86 2a1 1 0 00-1 1v6a1 1 0 102 0v-6a1 1 0 00-1-1zm-4.778 1a1 1 0 112 0v6a1 1 0 11-2 0v-6zm-2.778-1a1 1 0 00-1 1v6a1 1 0 102 0v-6a1 1 0 00-1-1zm-4.778 1a1 1 0 112 0v6a1 1 0 11-2 0v-6z',
   })
}

const setCreateIconHome = (createElement, createElementNS) => (ParentDiv, link) => {
   const home = createElement('div', ParentDiv, '', { href: '', class: 'home' })

   const a = createElement('a', home, '', { href: `${link}` })

   const svg = createElementNS('svg', a, { viewBox: '0 0 24 23', class: 'svgHome' })

   createElementNS('path', svg, {
      'fill-rule': 'evenodd',
      d: 'M19.637.765c.683 0 1.28.306 1.673.8l2.523 5.602c.112.222.168.444.168.666v3.334c0 .93-.546 1.734-1.334 2.108v7.892a1 1 0 01-2 0V13.5h-6v6.1c0 1.418-1.044 2.567-2.333 2.567H3.667c-1.289 0-2.333-1.15-2.333-2.566v-6.326A2.333 2.333 0 010 11.167V7.833c0-.222.056-.444.166-.666l2.51-5.602a2.162 2.162 0 011.688-.8h15.273zm2.03 10.735c.184 0 .333-.15.333-.333V8.5h-3.5v3h3.167zm-.328-5l-1.682-3.734H4.364c-.012 0-.024 0-.034.002L2.657 6.5h18.682zm-8.338 2h3.5v3H13v-3zm-2 0H7.5v3H11v-3zm-5.5 0H2v2.667c0 .184.149.333.333.333H5.5v-3zm-2.167 5.036h9.333v6.065c0 .352-.194.566-.333.566H3.667c-.14 0-.333-.214-.333-.566v-6.065z',
   })
}

export const RemoveElement = function (element, attribute) {
   let a = element.querySelector(`${attribute}`)
   if (a !== null) {
      a.remove()
   }
}

export const createElementNS = setFuncCreateElementNS(document, Object, Array)

export const createElement = setFuncCreateElement(document, Object, Array)

export const createResearch = SetCreateResearch(createElement, createElementNS)

export const createIconHome = setCreateIconHome(createElement, createElementNS)

export const createIconBasket = SetCreateIconBasket(createElement, createElementNS)

export const createIconHeader = setCreateIconHeader(createElement, createElementNS)

export const stars = Setstars(createElement, createElementNS)

export const createCard = setCreateCard(createElement, stars)
