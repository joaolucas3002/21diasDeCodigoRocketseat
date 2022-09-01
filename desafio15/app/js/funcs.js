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

const setFuncCreateCard = (document, RemoveElement, createElement) => async (parentDiv, promiseObj) => {
   const obj = await promiseObj

   const main = document.querySelector('main')

   if (obj.IsDayTime === false) {
      main.classList.add('night')
      main.classList.remove('day')
   } else {
      main.classList.add('day')
      main.classList.remove('night')
   }

   RemoveElement(parentDiv, '.card')

   const icon = obj.icon.toString().padStart(2, '0')

   const card = createElement('section', parentDiv, '', { class: 'card' })

   createElement('h3', card, obj.city, { class: 'nameCity' })

   createElement('h2', card, obj.temperature, { class: 'temperature' })

   const containerImg = createElement('div', card, '', { class: 'containerImg' })

   createElement('img', containerImg, '', { class: 'icon', src: `./imgs/2/${icon}.png` })

   createElement('div', card, obj.WeatherText, { class: 'heavenState' })
}

const setFuncGetWeather = (fetch) => async (cityValue) => {
   const city = cityValue.trim().replace(' ', '%20')

   const resFetch = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=VptMnMdYAb6yvFtl2Q4Q5htClvVLzYeu&q=${city}&language=pt-br`,
   )

   const resJson = await resFetch.json()

   const conditions = await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${resJson[0].Key}?apikey=VptMnMdYAb6yvFtl2Q4Q5htClvVLzYeu&language=pt-br`,
   )

   const conditionsJson = await conditions.json()

   console.log({
      icon: conditionsJson[0].WeatherIcon,
      city: `${resJson[0].LocalizedName} - ${resJson[0].Country.LocalizedName}`,
      temperature: `${conditionsJson[0].Temperature.Metric.Value}°${conditionsJson[0].Temperature.Metric.Unit}`,
      WeatherText: conditionsJson[0].WeatherText,
      IsDayTime: conditionsJson[0].IsDayTime,
   })

   return {
      icon: conditionsJson[0].WeatherIcon,
      city: `${resJson[0].LocalizedName} - ${resJson[0].Country.LocalizedName}`,
      temperature: `${conditionsJson[0].Temperature.Metric.Value}°${conditionsJson[0].Temperature.Metric.Unit}`,
      WeatherText: conditionsJson[0].WeatherText,
      IsDayTime: conditionsJson[0].IsDayTime,
   }
}

export const createElementNS = setFuncCreateElementNS(document, Object, Array)

export const createElement = setFuncCreateElement(document, Object, Array)

export const getWeather = setFuncGetWeather(fetch)

export const createCard = setFuncCreateCard(document, RemoveElement, createElement)
