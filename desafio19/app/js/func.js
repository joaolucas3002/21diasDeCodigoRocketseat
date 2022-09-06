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

const setFuncsGetEmojis = (fetch, console) => async (urlApi) => {
   try {
      const fet = await fetch(urlApi)

      const fetJson = await fet.json()

      return fetJson.results
   } catch (error) {
      console.log(error)
   }
}

const setFuncsCreateCard = (RemoveElement, createElement, navigator) => async (value, ParentDiv) => {
   const [...fetResults] = await value

   RemoveElement(ParentDiv, '.container')

   const container = createElement('section', ParentDiv, '', { class: 'container' })

   const array = fetResults.map((e) => {
      const contEmoji = createElement('div', container, '', { class: 'contEmoji' })

      const cardEmoji = createElement('div', contEmoji, e.emoji, { class: 'cardEmoji' })

      createElement('div', contEmoji, '', { class: 'btnClose' })

      createElement('span', cardEmoji, e.name, { class: 'emojiName' })

      cardEmoji.addEventListener('click', () => {
         navigator.clipboard.writeText(e.emoji)
      })

      return contEmoji
   })
}

export const RemoveElement = (ParentDiv, attribute) => {
   let element = ParentDiv.querySelector(attribute)

   if (element) element.remove()
}

export const createElement = setFuncCreateElement(document, Object)

export const createElementNS = setFuncCreateElementNS(document, Object)

export const getEmojis = setFuncsGetEmojis(fetch, console)

export const createCard = setFuncsCreateCard(RemoveElement, createElement, navigator)
