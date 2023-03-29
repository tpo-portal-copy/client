import { useQuery } from '@tanstack/react-query'
import { studentAPI } from '../utils/apis'
import { getDataFromLocalStorage } from '../utils/functions'

const getStudentDetails = async (roll: string) => {
  const response = await studentAPI.get(`/profile/${roll}/`, {
    headers: {
      Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
    },
  })
  return response.data
}

export default function useStudentDetails(roll: string) {
  return useQuery(['students'], () => getStudentDetails(roll))
}
