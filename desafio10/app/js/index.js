import { createElement, createElementNS, RemoveElement, PasswordConfirmErro, createError, PasswordErro, NameError, EmailError } from './funcs.js'

const root = document.getElementById('root')

const passwordEye = document.querySelector('#password ~ .eyeContainer')

const passwordConfirmEye = document.querySelector('#passwordConfirm ~ .eyeContainer')

const form = document.querySelector('form')

const name = form.querySelector('#text')

const email = form.querySelector('#email')

const password = document.querySelector('#password')

const passwordConfirm = document.querySelector('#passwordConfirm')

const erroTexts = {
   emailNull: 'E-mail é obrigatório',

   emailUndefined: 'Insira um e-mail válido',

   nameNull: 'Nome é obrigatório',

   nameSmall: 'O nome deve ter no minimo 6 dígitos',

   namebig: 'O nome deve ter no máximo 100 dígitos',

   passwordNull: 'Senha é obrigatório',

   passwordSmall: 'Senha deve ter no mínimo 6 caracteres',

   confirmPasswordNull: 'Confirmação de senha é obrigatório',

   confirmPasswordUndefined: 'Senhas não conferem.',
}

form.addEventListener('submit', (e) => {
   e.preventDefault()

   NameError(erroTexts, name)

   EmailError(erroTexts, email)

   PasswordErro(erroTexts, password)

   PasswordConfirmErro(erroTexts, password, passwordConfirm)

   const [...sectionE] = form.querySelectorAll('section.containerForm')

   const erros = sectionE.filter((e) => {
      const erro = e.querySelector('span.erro')
      if (erro !== null) return true
   })

   if (erros.length === 0) {
      alert('Formulario valido')
      name.value = ''
      email.value = ''
      password.value = ''
      passwordConfirm.value = ''
   }
})

passwordEye.addEventListener('click', () => {
   const input = document.querySelector('#password')

   passwordEye.classList.toggle('visible')

   input.type === 'password' ? (input.type = 'text') : (input.type = 'password')
})

passwordConfirmEye.addEventListener('click', () => {
   const input = document.querySelector('#passwordConfirm')

   passwordConfirmEye.classList.toggle('visible')

   input.type === 'password' ? (input.type = 'text') : (input.type = 'password')
})
