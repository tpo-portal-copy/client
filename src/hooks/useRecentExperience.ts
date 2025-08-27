import { useQuery } from 'react-query'
import { recentExperienceAPI } from '../utils/apis'

const getExperience = async () => {
  const response = await recentExperienceAPI.get(`/`)
  return response.data
}

export default function useRecentExperience() {
  return useQuery([`experience}`], () => getExperience())
}
