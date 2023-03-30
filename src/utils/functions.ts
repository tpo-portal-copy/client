/* eslint-disable no-restricted-syntax */

import { TimeStamps } from './types'

// sets data to local storage
export const setDataToLocalStorage = (key: string, data: string) => {
  return localStorage.setItem(key, data)
}

// gets data from local storage
export const getDataFromLocalStorage = (key: string) => {
  return localStorage.getItem(key)
}

// removes data from local storage
export const removeDataFromLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}

// clears data from local storage
export const clearDataFromLocalStorage = () => {
  localStorage.clear()
}

// returns time between input date and current time
export function fromNow(input: Date) {
  const date = input instanceof Date ? input : new Date(input)
  const formatter = new Intl.RelativeTimeFormat('en')
  const ranges = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  }
  const secondsElapsed = (date.getTime() - Date.now()) / 1000

  let key: keyof TimeStamps

  for (key in ranges) {
    if (ranges[key] < Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / ranges[key]
      return formatter.format(Math.round(delta), key)
    }
  }
  return ''
}

export const getDifficulty = (difficultySymbol: string) => {
  if (difficultySymbol === 'E') return 'Easy'
  if (difficultySymbol === 'M') return 'Medium'
  return 'Hard'
}

export const isAuthenticated = () => {
  const userToken = getDataFromLocalStorage('access_token')

  if (userToken == null || !userToken) return false
  return true
}

export const isStudentDetailsFormFilled = () => {
  const eligibility = getDataFromLocalStorage('eligibility')
  if (eligibility == null || eligibility === '') return false
  return true
}

export const isStudentEligibleForPlacementOrIntern = () => {
  const eligibility = getDataFromLocalStorage('eligibility')
  if (eligibility === 'NA') return false
  return true
}
