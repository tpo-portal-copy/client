import { useQuery } from '@tanstack/react-query'
import { statesAPI } from '../utils/apis'
import { getDataFromLocalStorage } from '../utils/functions'

const getStates = async () => {
  const response = await statesAPI.get('/', {
    headers: {
      Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
    },
  })
  return response.data
}

export default function useStates() {
  return useQuery([`drives`], () => getStates())
}
