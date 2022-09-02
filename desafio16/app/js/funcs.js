const setFuncCreateElement = (document, Object) => (TypeElement, ParentDiv, text, Atributes) => {
   const element = document.createElement(TypeElement)

   text !== undefined && text !== '' ? element.append(text) : text

   Atributes !== undefined && Atributes !== '' ? Object.keys(Atributes).map((atr) => element.setAttribute(atr, Atributes[atr])) : Atributes

   ParentDiv !== undefined && ParentDiv !== '' ? ParentDiv.append(element) : ParentDiv

   return element
}

const setFuncPlayAudio = (document, setTimeout) => (keyValue) => {
   let audio = document.querySelector(`audio[data-audio="${keyValue}"]`)
   let key = document.querySelector(`div[data-key="${keyValue}"]`)

   if (audio) {
      audio.currentTime = 0
      audio.play()
   }

   if (key) {
      key.classList.add('selecting')
      setTimeout(() => key.classList.remove('selecting'), 400)
   }
}

const setFuncCreateAudio = (createElement) => (ParentDiv) => {
   const secAudio = createElement('section', ParentDiv, '', { class: 'secAudio' })

   createElement('audio', secAudio, '', { src: './audio/PA2.wav', 'data-audio': '2' })

   createElement('audio', secAudio, '', { src: './audio/PA3.wav', 'data-audio': '3' })

   createElement('audio', secAudio, '', { src: './audio/PA5.wav', 'data-audio': '5' })

   createElement('audio', secAudio, '', { src: './audio/PA6.wav', 'data-audio': '6' })

   createElement('audio', secAudio, '', { src: './audio/PA7.wav', 'data-audio': '7' })

   createElement('audio', secAudio, '', { src: './audio/PAe.wav', 'data-audio': 'e' })

   createElement('audio', secAudio, '', { src: './audio/PAq.wav', 'data-audio': 'q' })

   createElement('audio', secAudio, '', { src: './audio/PAr.wav', 'data-audio': 'r' })

   createElement('audio', secAudio, '', { src: './audio/PAt.wav', 'data-audio': 't' })

   createElement('audio', secAudio, '', { src: './audio/PAu.wav', 'data-audio': 'u' })

   createElement('audio', secAudio, '', { src: './audio/PAw.wav', 'data-audio': 'w' })

   createElement('audio', secAudio, '', { src: './audio/PAy.wav', 'data-audio': 'y' })
}

const setFuncCreateKey = (createElement) => (ParentDiv) => {
   const secKey = createElement('section', ParentDiv, '', { class: 'secKey' })

   createElement('div', secKey, 'Q', { class: 'white', C: '', 'data-key': 'q' })

   createElement('div', secKey, '2', { class: 'black', CS: '', 'data-key': '2' })

   createElement('div', secKey, 'W', { class: 'white', D: '', 'data-key': 'w' })

   createElement('div', secKey, '3', { class: 'black', DS: '', 'data-key': '3' })

   createElement('div', secKey, 'E', { class: 'white', E: '', 'data-key': 'e' })

   createElement('div', secKey, 'R', { class: 'white', F: '', 'data-key': 'r' })

   createElement('div', secKey, '5', { class: 'black', fs: '', 'data-key': '5' })

   createElement('div', secKey, 'T', { class: 'white', g: '', 'data-key': 't' })

   createElement('div', secKey, '6', { class: 'black', gs: '', 'data-key': '6' })

   createElement('div', secKey, 'Y', { class: 'white', a: '', 'data-key': 'y' })

   createElement('div', secKey, '7', { class: 'black', as: '', 'data-key': '7' })

   createElement('div', secKey, 'U', { class: 'white', b: '', 'data-key': 'u' })
}

export const createElement = setFuncCreateElement(document, Object, Array)

export const createKey = setFuncCreateKey(createElement)

export const createAudio = setFuncCreateAudio(createElement)

export const playAudio = setFuncPlayAudio(document, setTimeout)
