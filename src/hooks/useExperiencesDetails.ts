import { useQuery } from '@tanstack/react-query'
import { experiencesAPI } from '../utils/apis'
import { getDataFromLocalStorage } from '../utils/functions'

const getExperiencesDetails = async (id: string | undefined) => {
  const response = await experiencesAPI.get(`/${id}`, {
    headers: {
      Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
    },
  })
  return response.data
}

export default function useExperiencesDetails(id: string | undefined) {
  return useQuery(['experiencesDetails', id], () => getExperiencesDetails(id))
}
