const setFuncCreateElement =
   (document, Object) =>
   (TypeElement, ParentDiv, text, Atributes ) => {
      const element = document.createElement(TypeElement)

      text !== undefined && text !== '' ? element.append(text) : text

      Atributes !== undefined && Atributes !== '' ? Object.keys(Atributes).map((atr) => element.setAttribute(atr, Atributes[atr])) : Atributes

      ParentDiv !== undefined && ParentDiv !== '' ? ParentDiv.append(element) : ParentDiv

      return element
   }

export const createElement = setFuncCreateElement(document, Object, Array)
