import { useQuery } from 'react-query'
import { coursesAPI } from '../utils/apis'

const getCourses = async () => {
  const response = await coursesAPI.get('/')
  return response.data
}

export default function useCourses() {
  return useQuery([`courses`], () => getCourses())
}
