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

// generates time stamp

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
