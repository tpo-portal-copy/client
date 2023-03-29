import { useQuery } from '@tanstack/react-query'
import { coursesAPI } from '../utils/apis'
import { getDataFromLocalStorage } from '../utils/functions'

const getCourses = async () => {
  const response = await coursesAPI.get('/', {
    headers: {
      Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
    },
  })
  return response.data
}

export default function useCourses() {
  return useQuery([`courses`], () => getCourses())
}
