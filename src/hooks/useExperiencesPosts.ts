import { useQuery } from '@tanstack/react-query'
import { experiencesAPI } from '../utils/apis'
import { getDataFromLocalStorage } from '../utils/functions'

const getExperiences = async (pageNo: number, query: string) => {
  const response = await experiencesAPI.get(`/?page=${pageNo}&${query}`, {
    headers: {
      Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
    },
  })
  return response.data
}

export default function useExperiencesPosts(pageNo: number, query: string) {
  return useQuery(['experiences', pageNo, query], () => getExperiences(pageNo, query))
}
