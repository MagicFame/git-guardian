import { now } from './utils'

const firstNames = [
  'Abraham',
  'Madeleine',
  'Irwin',
  'Cora',
  'Gwenael',
  'Roberta',
  'Roderick',
  'Lua',
  'Yves',
  'Mado',
  'Tommy',
  'Sidoine',
]

const lastNames = [
  'Beaumont',
  'Bissonnette',
  'Montgomery',
  'De la Croix',
  'Monteil',
  'Rigal',
  'Barbet',
  'Lucy',
  'Pichard',
  'Brochard',
]

const companies = [
  'gg.com',
  'gmail.com',
  'toto.xd',
  'masson.paris',
  'picard.zero',
]

const cars = [
  'Renalut',
  'Peugeto',
  'Nissna',
  'Skdoa',
  'Toyoat',
  'Beta-Juliette',
  'Frod',
  'Prosche',
  'Adui',
  'WMB',
  'Cadiccal',
  'Chevorlet',
  'Ironarri',
  'Hando',
  'Merdeces',
  'Voksvaguenne',
  'Vovlo',
  'Bagutti',
  'Telsa',
  'Suziku',
]

const range = (n) => [...Array(n)]
const randInt = (max, min = 0) => Math.floor(Math.random() * (max - min) + min)
const randChoice = (arr) => arr[randInt(arr.length)]
const DAY_IN_MILLISECONDS = 86400000
const randDate = (startDate, endDate = now) =>
  new Date(
    randInt(endDate.getTime() - startDate.getTime()) + startDate.getTime()
  )
const addDays = (date, n) => new Date(date.getTime() + n * DAY_IN_MILLISECONDS)

let nextUserId = 0
const generateUser = () => {
  const firstName = randChoice(firstNames)
  const lastName = randChoice(lastNames)
  const company = randChoice(companies)
  const createdAt = randDate(addDays(now, -365 * 2))
  return {
    id: nextUserId++,
    firstName,
    lastName,
    email: `${firstName}.${lastName}@${company}`,
    createdAt,
  }
}

let nextCarId = 0
const generateCar = () => ({
  id: nextCarId++,
  name: cars[nextCarId % 20],
  createdAt: randDate(addDays(now, -365 * 2)),
})

const combination = (arr, k) => {
  const copy = arr.slice()
  const elements = []
  for (let i = 0; i < k; i++) {
    const idx = randInt(copy.length)
    elements.push(copy.splice(idx, 1)[0])
  }
  return elements
}

let nextInsuranceId = 0
const generateInsurances = (users, cars) => {
  const insurances = []
  users.forEach((user) => {
    const n_insurances = randInt(4)
    const owner_of = combination(cars, n_insurances)
    owner_of.forEach((car) => {
      insurances.push({
        id: nextInsuranceId++,
        car: car.id,
        user: user.id,
        expiration: randDate(addDays(now, -365), addDays(now, 365)),
      })
    })
  })
  return insurances
}

const N_USERS = 500
const N_CARS = 20

export const generateData = () => {
  const users = range(N_USERS).map(generateUser)
  const cars = range(N_CARS).map(generateCar)
  const insurances = generateInsurances(users, cars)

  return {
    users,
    cars,
    insurances,
  }
}
