import { useQuery } from 'react-query'
import { statesAPI } from '../utils/apis'

const getStates = async () => {
  const response = await statesAPI.get('/')
  return response.data
}

export default function useStates() {
  return useQuery([`drives`], () => getStates())
}
