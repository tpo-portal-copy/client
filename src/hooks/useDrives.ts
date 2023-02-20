import { useQuery } from 'react-query'
import { drivesAPI } from '../utils/apis'

const getDrives = async () => {
  const response = await drivesAPI.get('/')
  return response.data
}

export default function useDrives() {
  return useQuery('drives', getDrives)
}
