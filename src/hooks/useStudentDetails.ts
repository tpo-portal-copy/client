import { useQuery } from '@tanstack/react-query'
import { studentAPI } from '../utils/apis'

const getStudentDetails = async (roll: string) => {
  const response = await studentAPI.get(`/profile/${roll}/`)
  return response.data
}

export default function useStudentDetails(roll: string) {
  return useQuery(['students'], () => getStudentDetails(roll))
}
