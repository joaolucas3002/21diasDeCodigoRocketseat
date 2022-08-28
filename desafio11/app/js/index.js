import { createElement, createElementNS } from './funcs.js'
import { imageArray } from './imgs.js'

const root = document.getElementById('root')

const cont = createElement('div', root, '', { class: 'cont' })

const button1 = createElement('button', cont, '<', { class: 'button' })
const contCarousel = createElement('div', cont, '', { class: 'contCarousel' })
const dutton2 = createElement('button', cont, '>', { class: 'button' })
const contIndexImg = createElement('div', cont, '', { class: 'contIndexImg' })

const arrayIndexImg = imageArray.map(() => createElement('div', contIndexImg, '', { class: 'indexImg' }))

const div = createElement('div', contCarousel, '', { class: 'imgsContent' })
const div2 = createElement('div', contCarousel, '', { class: 'imgsContent' })
const div3 = createElement('div', contCarousel, '', { class: 'imgsContent' })

let numImg1 = imageArray.length - 1
let numImg2 = 0
let numImg3 = 1

const img1 = createElement('img', div, '', { class: 'imgs', src: imageArray[numImg1] })
const img2 = createElement('img', div2, '', { class: 'imgs', src: imageArray[numImg2] })
const img3 = createElement('img', div3, '', { class: 'imgs', src: imageArray[numImg3] })

arrayIndexImg.map((e, i) => (i === numImg2 ? e.classList.add('int') : e.classList.remove('int')))

button1.addEventListener('click', () => {
   const numValide = (num) => (--num < 0 ? (num = 15) : num)

   numImg1 = numValide(numImg1)
   numImg2 = numValide(numImg2)
   numImg3 = numValide(numImg3)

   img1.src = imageArray[numImg1]
   img2.src = imageArray[numImg2]
   img3.src = imageArray[numImg3]

   arrayIndexImg.map((e, i) => (i === numImg2 ? e.classList.add('int') : e.classList.remove('int')))
})

dutton2.addEventListener('click', () => {
   const numValide = (num) => (++num > 15 ? (num = 0) : num)

   numImg1 = numValide(numImg1)
   numImg2 = numValide(numImg2)
   numImg3 = numValide(numImg3)

   img1.src = imageArray[numImg1]
   img2.src = imageArray[numImg2]
   img3.src = imageArray[numImg3]

   arrayIndexImg.map((e, i) => (i === numImg2 ? e.classList.add('int') : e.classList.remove('int')))
})
