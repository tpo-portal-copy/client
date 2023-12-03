import { useQuery } from 'react-query'
import { studentAPI, studentEXCELAPI } from '../utils/apis'

const getStudentData = async (
  course?: string,
  branch?: string,
  cgpi?: number,
  page?: number,
  gender?: string,
) => {
  const response = await studentAPI.get(
    `/?course=${course}&branch=${branch}&cgpi=${cgpi}&page=${page}&gender=${gender}`,
  )
  return response.data
}

export function useStudentData(
  course?: string,
  branch?: string,
  cgpi?: number,
  page?: number,
  gender?: string,
) {
  return useQuery([`students${course}${branch}${cgpi}${page}${gender}`], () =>
    getStudentData(course, branch, cgpi, page, gender),
  )
}

const getStudentDataWithRoll = async (roll?: string, firstName?: string) => {
  const response = await studentAPI.get(`/?student=${roll}&firstName=${firstName}`)
  return response.data
}
export function useStudentDataWithRoll(roll?: string, firstName?: string) {
  console.log(firstName)
  return useQuery([`students${roll}${firstName}`], () => getStudentDataWithRoll(roll, firstName))
}
