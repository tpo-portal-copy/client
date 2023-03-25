import { useQuery } from '@tanstack/react-query'
import { studentAPI } from '../utils/apis'

const getStudentDetails = async (params: any) => {
  const response = await studentAPI.get('/', {
    params,
  })
  return response.data
}

export default function useStudentDetails(params?: any, page?: number) {
  return useQuery([`students${page}`], () => getStudentDetails(params))
}
