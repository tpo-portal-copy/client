import { useQuery } from '@tanstack/react-query'
import { studentAPI } from '../utils/apis'

const getStudentData = async (params: any) => {
  const response = await studentAPI.get('/', {
    params,
  })
  return response.data
}

export default function useStudentData(params?: any, page?: number) {
  return useQuery([`students${page}`], () => getStudentData(params))
}
