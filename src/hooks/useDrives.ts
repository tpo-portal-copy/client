import { useQuery } from '@tanstack/react-query'
import { drivesAPI } from '../utils/apis'

const getDrives = async (params: any) => {
  const response = await drivesAPI.get('/', {
    params,
  })
  return response.data
}

export default function useDrives(params?: any, page?: number, company?: any, cluster?: number) {
  return useQuery([`drives${page}${cluster}${company}`], () => getDrives(params))
}
