import { useQuery } from 'react-query'
import { experiencesAPI } from '../utils/apis'

const getExperiences = async (pageNo: number, query: string) => {
  const response = await experiencesAPI.get(`/?page=${pageNo}&${query}`)
  return response.data
}

export default function useExperiencesPosts(pageNo: number, query: string) {
  return useQuery(['experiences', pageNo, query], () => getExperiences(pageNo, query))
}
