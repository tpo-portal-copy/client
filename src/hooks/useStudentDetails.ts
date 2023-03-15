import { useQuery } from '@tanstack/react-query'
import { studentAPI } from '../utils/apis'

const getStudentDetails = async () => {
  const response = await studentAPI.get('/')
  return response.data
}

export default function useStudentDetails() {
  return useQuery(['students'], getStudentDetails)
}
