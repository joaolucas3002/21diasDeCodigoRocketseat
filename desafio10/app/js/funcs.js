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

export const RemoveElement = function (element, attribute) {
   let a = element.querySelector(`${attribute}`)
   if (a !== null) {
      a.remove()
   }
}

const SetNameError = (document, RemoveElement,createError)=> (erroTexts,name)=>{
   
   const sectName = document.querySelector('form section.containerForm:nth-child(1)')

   if (name.value.length === 0) {
      RemoveElement(sectName,".erro")
      createError(sectName,erroTexts.nameNull)
   }else if(name.value.length < 6){
      RemoveElement(sectName,".erro")
      createError(sectName,erroTexts.nameSmall)
   } else if(name.value.length > 100){
      RemoveElement(sectName,".erro")
      createError(sectName,erroTexts.namebig)
   } else{
      RemoveElement(sectName,".erro")   
   }

}

const SetEmailError = (document, RemoveElement,createError) => (erroTexts,email)=>{
   const mailFormat =
   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const testMailFormat = mailFormat.test(email.value)

   const sectEmail = document.querySelector('form section.containerForm:nth-child(2)')

   if (email.value.length === 0) {
      RemoveElement(sectEmail,".erro")
      createError(sectEmail,erroTexts.emailNull)
   } else if(testMailFormat === false) {
      RemoveElement(sectEmail,".erro")
      createError(sectEmail,erroTexts.emailUndefined)
   } else {
      RemoveElement(sectEmail,".erro")
   }

}

const SetPasswordErro = (document, RemoveElement,createError)=> (erroTexts,password)=> {
   
const sectPassword = document.querySelector('form section.containerForm:nth-child(3)')

if (password.value.length === 0) {
   RemoveElement(sectPassword,".erro")
   createError(sectPassword,erroTexts.passwordNull)
} else if(password.value.length < 6){
   RemoveElement(sectPassword,".erro")
   createError(sectPassword,erroTexts.passwordSmall)
}else{
   RemoveElement(sectPassword,".erro")
}

}

const SetPasswordConfirmErro = (document, RemoveElement,createError) => (erroTexts,password,passwordConfirm) => {
   const sectionPasswordConfirm = document.querySelector('form section.containerForm:nth-child(4)')


   if (passwordConfirm.value.length === 0) {
     RemoveElement(sectionPasswordConfirm, '.erro')
      createError(sectionPasswordConfirm,erroTexts.confirmPasswordNull)
   } else if (password.value !== passwordConfirm.value) {
     RemoveElement(sectionPasswordConfirm, '.erro')
      createError(sectionPasswordConfirm,erroTexts.confirmPasswordUndefined)
   } else {
     RemoveElement(sectionPasswordConfirm, '.erro')
   }
}



export const createError = (sectionPasswordConfirm,text) => createElement('span', sectionPasswordConfirm, text, { class: 'erro' })

export const createElementNS = setFuncCreateElementNS(document, Object, Array)

export const createElement = setFuncCreateElement(document, Object, Array)

export const NameError = SetNameError(document, RemoveElement,createError)

export const EmailError = SetEmailError(document, RemoveElement,createError)

export const PasswordErro = SetPasswordErro(document, RemoveElement,createError)

export const PasswordConfirmErro = SetPasswordConfirmErro(document, RemoveElement,createError)