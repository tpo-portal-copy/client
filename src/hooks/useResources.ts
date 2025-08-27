import { useQuery } from 'react-query'
import { resourcesAPI } from '../utils/apis'

const getResources = async (params: any, branch: string) => {
  const response = await resourcesAPI.get(`/${branch}`, {
    params,
  })
  return response.data
}

export default function useResources(params: any, branch: string, term: string) {
  return useQuery([`resources${term}${branch}`], () => getResources(params, branch))
}
