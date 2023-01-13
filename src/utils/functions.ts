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
