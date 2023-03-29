import { useQuery } from '@tanstack/react-query'
import { resourcesAPI } from '../utils/apis'
import { getDataFromLocalStorage } from '../utils/functions'

const getResources = async (params: any, branch: string) => {
  const response = await resourcesAPI.get(`/${branch}`, {
    params,
    headers: {
      Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
    },
  })
  return response.data
}

export default function useResources(params: any, branch: string, term: string) {
  return useQuery([`resources${term}${branch}`], () => getResources(params, branch))
}
