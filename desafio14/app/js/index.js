import { createElement, createElementNS, RemoveElement, createCard, createResearch, createIconHome, createIconBasket, createIconHeader } from './funcs.js'

import { detaCards } from './deta.js'

const root = document.getElementById('root')

const header = createElement('header', root)

const containerHeader = createElement('section', header, '', { class: 'container' })

createElement('a', containerHeader, 'Logo', { class: 'logo' })

const nav = createElement('nav', containerHeader, '', { class: 'nav' })

createResearch(nav)

createIconHome(nav, '#')

createIconBasket(nav, '#')

createIconHeader(nav, '#')

const main = createElement('main', root)

const containerMain = createElement('section', main, '', { class: 'container' })

createElement("button",main, "Ver mais produtos",{class:"buttonMoreProducts"})


detaCards.map((e) => createCard(containerMain, e))

const footer = createElement('footer', root)

const buttonFooter = createElement("button",footer, "","")

createElement('a', buttonFooter, "Voltar ao início", {href:"#" })

createElement('a', footer, 'Logo', { class: 'logo'})



const weather = [
   {
      LocalObservationDateTime: '2022-09-01T00:20:00-03:00',
      EpochTime: 1662002400,
      WeatherText: 'Algumas nuvens',
      WeatherIcon: 36,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: false,
      Temperature: {
         Metric: {
            Value: 23,
            Unit: 'C',
            UnitType: 17,
         },
         Imperial: {
            Value: 73,
            Unit: 'F',
            UnitType: 18,
         },
      },
      MobileLink: 'http://www.accuweather.com/pt/br/recife/45090/current-weather/45090?lang=pt-br',
      Link: 'http://www.accuweather.com/pt/br/recife/45090/current-weather/45090?lang=pt-br',
   },
]

const ff = [
   {
      Version: 1,
      Key: '45090',
      Type: 'City',
      Rank: 21,
      LocalizedName: 'Recife',
      EnglishName: 'Recife',
      PrimaryPostalCode: '',
      Region: {
         ID: 'SAM',
         LocalizedName: 'América do Sul',
         EnglishName: 'South America',
      },
      Country: {
         ID: 'BR',
         LocalizedName: 'Brasil',
         EnglishName: 'Brazil',
      },
      AdministrativeArea: {
         ID: 'PE',
         LocalizedName: 'Pernambuco',
         EnglishName: 'Pernambuco',
         Level: 1,
         LocalizedType: 'Estado',
         EnglishType: 'State',
         CountryID: 'BR',
      },
      TimeZone: {
         Code: 'BRT',
         Name: 'America/Recife',
         GmtOffset: -3,
         IsDaylightSaving: false,
         NextOffsetChange: null,
      },
      GeoPosition: {
         Latitude: -8.063,
         Longitude: -34.889,
         Elevation: {
            Metric: {
               Value: 1,
               Unit: 'm',
               UnitType: 5,
            },
            Imperial: {
               Value: 3,
               Unit: 'ft',
               UnitType: 0,
            },
         },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
         {
            Level: 2,
            LocalizedName: 'Recife',
            EnglishName: 'Recife',
         },
         {
            Level: 3,
            LocalizedName: 'Recife',
            EnglishName: 'Recife',
         },
      ],
      DataSets: ['AirQualityCurrentConditions', 'AirQualityForecasts', 'Alerts', 'FutureRadar', 'MinuteCast', 'Radar'],
   },
   {
      Version: 1,
      Key: '2303646',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Recife',
      EnglishName: 'Recife',
      PrimaryPostalCode: '',
      Region: {
         ID: 'SAM',
         LocalizedName: 'América do Sul',
         EnglishName: 'South America',
      },
      Country: {
         ID: 'BR',
         LocalizedName: 'Brasil',
         EnglishName: 'Brazil',
      },
      AdministrativeArea: {
         ID: 'BA',
         LocalizedName: 'Bahia',
         EnglishName: 'Bahia',
         Level: 1,
         LocalizedType: 'Estado',
         EnglishType: 'State',
         CountryID: 'BR',
      },
      TimeZone: {
         Code: 'BRT',
         Name: 'America/Bahia',
         GmtOffset: -3,
         IsDaylightSaving: false,
         NextOffsetChange: null,
      },
      GeoPosition: {
         Latitude: -11.892,
         Longitude: -41.717,
         Elevation: {
            Metric: {
               Value: 800,
               Unit: 'm',
               UnitType: 5,
            },
            Imperial: {
               Value: 2624,
               Unit: 'ft',
               UnitType: 0,
            },
         },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
         {
            Level: 2,
            LocalizedName: 'Barro Alto',
            EnglishName: 'Barro Alto',
         },
         {
            Level: 3,
            LocalizedName: 'Lagoa do Boi',
            EnglishName: 'Lagoa do Boi',
         },
      ],
      DataSets: ['AirQualityCurrentConditions', 'AirQualityForecasts', 'Alerts', 'FutureRadar', 'MinuteCast', 'Radar'],
   },
   {
      Version: 1,
      Key: '2304156',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Recife',
      EnglishName: 'Recife',
      PrimaryPostalCode: '',
      Region: {
         ID: 'SAM',
         LocalizedName: 'América do Sul',
         EnglishName: 'South America',
      },
      Country: {
         ID: 'BR',
         LocalizedName: 'Brasil',
         EnglishName: 'Brazil',
      },
      AdministrativeArea: {
         ID: 'BA',
         LocalizedName: 'Bahia',
         EnglishName: 'Bahia',
         Level: 1,
         LocalizedType: 'Estado',
         EnglishType: 'State',
         CountryID: 'BR',
      },
      TimeZone: {
         Code: 'BRT',
         Name: 'America/Bahia',
         GmtOffset: -3,
         IsDaylightSaving: false,
         NextOffsetChange: null,
      },
      GeoPosition: {
         Latitude: -11.671,
         Longitude: -42.168,
         Elevation: {
            Metric: {
               Value: 758,
               Unit: 'm',
               UnitType: 5,
            },
            Imperial: {
               Value: 2486,
               Unit: 'ft',
               UnitType: 0,
            },
         },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
         {
            Level: 2,
            LocalizedName: 'Ibipeba',
            EnglishName: 'Ibipeba',
         },
         {
            Level: 3,
            LocalizedName: 'Lagoa Grande',
            EnglishName: 'Lagoa Grande',
         },
      ],
      DataSets: ['AirQualityCurrentConditions', 'AirQualityForecasts', 'Alerts', 'FutureRadar', 'MinuteCast', 'Radar'],
   },
   {
      Version: 1,
      Key: '2304491',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Recife',
      EnglishName: 'Recife',
      PrimaryPostalCode: '',
      Region: {
         ID: 'SAM',
         LocalizedName: 'América do Sul',
         EnglishName: 'South America',
      },
      Country: {
         ID: 'BR',
         LocalizedName: 'Brasil',
         EnglishName: 'Brazil',
      },
      AdministrativeArea: {
         ID: 'BA',
         LocalizedName: 'Bahia',
         EnglishName: 'Bahia',
         Level: 1,
         LocalizedType: 'Estado',
         EnglishType: 'State',
         CountryID: 'BR',
      },
      TimeZone: {
         Code: 'BRT',
         Name: 'America/Bahia',
         GmtOffset: -3,
         IsDaylightSaving: false,
         NextOffsetChange: null,
      },
      GeoPosition: {
         Latitude: -11.011,
         Longitude: -41.896,
         Elevation: {
            Metric: {
               Value: 647,
               Unit: 'm',
               UnitType: 5,
            },
            Imperial: {
               Value: 2122,
               Unit: 'ft',
               UnitType: 0,
            },
         },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
         {
            Level: 2,
            LocalizedName: 'Jussara',
            EnglishName: 'Jussara',
         },
         {
            Level: 3,
            LocalizedName: 'Recife',
            EnglishName: 'Recife',
         },
      ],
      DataSets: ['AirQualityCurrentConditions', 'AirQualityForecasts', 'Alerts', 'FutureRadar', 'MinuteCast', 'Radar'],
   },
   {
      Version: 1,
      Key: '2734237',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Recife',
      EnglishName: 'Recife',
      PrimaryPostalCode: '',
      Region: {
         ID: 'SAM',
         LocalizedName: 'América do Sul',
         EnglishName: 'South America',
      },
      Country: {
         ID: 'BR',
         LocalizedName: 'Brasil',
         EnglishName: 'Brazil',
      },
      AdministrativeArea: {
         ID: 'SC',
         LocalizedName: 'Santa Catarina',
         EnglishName: 'Santa Catarina',
         Level: 1,
         LocalizedType: 'Estado',
         EnglishType: 'State',
         CountryID: 'BR',
      },
      TimeZone: {
         Code: 'BRT',
         Name: 'America/Sao_Paulo',
         GmtOffset: -3,
         IsDaylightSaving: false,
         NextOffsetChange: null,
      },
      GeoPosition: {
         Latitude: -28.486,
         Longitude: -48.996,
         Elevation: {
            Metric: {
               Value: 3,
               Unit: 'm',
               UnitType: 5,
            },
            Imperial: {
               Value: 9,
               Unit: 'ft',
               UnitType: 0,
            },
         },
      },
      IsAlias: false,
      ParentCity: {
         Key: '35953',
         LocalizedName: 'Tubarão',
         EnglishName: 'Tubarão',
      },
      SupplementalAdminAreas: [
         {
            Level: 2,
            LocalizedName: 'Tubarão',
            EnglishName: 'Tubarão',
         },
         {
            Level: 3,
            LocalizedName: 'Tubarão',
            EnglishName: 'Tubarão',
         },
      ],
      DataSets: ['AirQualityCurrentConditions', 'AirQualityForecasts', 'Alerts', 'FutureRadar', 'MinuteCast', 'Radar'],
   },
]