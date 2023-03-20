/* eslint-disable @typescript-eslint/default-param-last */
import { useQuery } from '@tanstack/react-query'
import { citiesAPI } from '../utils/apis'

const getCities = async (state: string) => {
  const response = await citiesAPI.get(`/${state}`)
  return response.data
}

export default function useCitites(state: string) {
  return useQuery([`cities${state}`], () => getCities(state))
}
