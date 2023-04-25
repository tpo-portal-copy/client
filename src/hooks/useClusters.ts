import { useQuery } from 'react-query'
import { clustersAPI } from '../utils/apis'

const getClusters = async () => {
  const response = await clustersAPI.get('/')
  return response.data
}

export default function useClusters() {
  return useQuery([`clusters`], () => getClusters())
}
