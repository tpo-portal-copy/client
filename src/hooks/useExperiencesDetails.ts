import { useQuery } from '@tanstack/react-query'
import { experiencesAPI } from '../utils/apis'

const getExperiencesDetails = async (id: string | undefined) => {
  const response = await experiencesAPI.get(`/${id}`)
  return response.data
}

export default function useExperiencesDetails(id: string | undefined) {
  return useQuery(['experiencesDetails', id], () => getExperiencesDetails(id))
}
