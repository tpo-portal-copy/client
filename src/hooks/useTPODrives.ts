import { useQuery } from 'react-query'
import { TPODrivesAPI } from '../utils/apis'

const getDrives = async (params: any) => {
  const response = await TPODrivesAPI.get('/', {
    params,
  })
  return response.data
}

export default function useTPODrives(params?: any, type?: string) {
  return useQuery([`drives${type}`], () => getDrives(params))
}
