/* eslint-disable @typescript-eslint/default-param-last */
import { useQuery } from '@tanstack/react-query'
import { companiesDetailsAPI } from '../utils/apis'

const getCompaniesDetails = async (params: any) => {
  const response = await companiesDetailsAPI.get('/', { params })
  return response.data
}

export default function useCompaniesDetails(params: any) {
  return useQuery(
    [`companies${params.page}${params.session}${params.type}${params.order}${params.company}`],
    () => getCompaniesDetails(params),
  )
}
