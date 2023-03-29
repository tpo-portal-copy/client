import { useQuery } from '@tanstack/react-query'
import { drivesAPI } from '../utils/apis'
import { getDataFromLocalStorage } from '../utils/functions'

const getDrives = async (params: any) => {
  const response = await drivesAPI.get('/', {
    params,
    headers: {
      Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
    },
  })
  return response.data
}

export default function useDrives(params?: any, page?: number, company?: any, cluster?: string) {
  return useQuery([`drives${page}${cluster}${company}${cluster}`], () => getDrives(params))
}
