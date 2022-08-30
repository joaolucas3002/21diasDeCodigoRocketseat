import { createQuiz } from './funcs.js'

export const arraycreateQuiz = [
   () =>
      createQuiz('Como você escreve "Hello World" em um alerta?', [
         ['ale("Hello World")', 'false'],
         ['lrt("Hello World")', 'false'],
         ['alerta("Hello World")', 'false'],
         ['alert("Hello World")', 'true'],
      ]),
   () =>
      createQuiz('Como escrever uma instrução IF em JavaScript?', [
         ['if (i==5)', 'true'],
         ['if (i=5)', 'false'],
         ['if i==5', 'false'],
         ['if i=5 ', 'false'],
      ]),
   () =>
      createQuiz('Como se cria um loop FOR ?', [
         ['for i = 1 to 5', 'false'],
         ['for (i = 0; i <= 5)', 'false'],
         ['for (i = 0; i <= 5; i++)', 'true'],
         ['for (i <= 5; i++)', 'false'],
      ]),
   () =>
      createQuiz('Como você pode adicionar um comentário em um JavaScript?', [
         ['*/ Comentário/*', 'false'],
         ['<!--Comentário-->', 'false'],
         ["'Comentário'", 'false'],
         ['//Comentário', 'true'],
      ]),
   () =>
      createQuiz('Qual é a maneira correta de escrever um array JavaScript?', [
         ['["red","green","blue"]', 'true'],
         ['{"red","green","blue"}', 'false'],
         ['(1:"red",2:"green",3:"blue")', 'false'],
         ['${"red","green","blue"}', 'false'],
      ]),
   () =>
      createQuiz('Qual evento ocorre quando o usuário clica em um elemento HTML?', [
         ['onmouseover', 'false'],
         ['onchange', 'false'],
         ['onclick', 'true'],
         ['onmouseclick', 'false'],
      ]),
]
