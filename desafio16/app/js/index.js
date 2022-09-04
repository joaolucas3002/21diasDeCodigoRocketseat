import { createElement , createAudio , createKey , playAudio} from './funcs.js'

const root = document.getElementById('root')

createElement("h1",root, "Piano Virtual")

createKey(root)

createAudio(root)

const [...keys] = document.querySelectorAll('.secKey div')

keys.map((Element) => Element.addEventListener('click', (e) => playAudio(e.target.getAttribute('data-key'))))

document.addEventListener('keydown', (e) => playAudio(e.key))

