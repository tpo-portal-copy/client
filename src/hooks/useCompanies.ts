/* eslint-disable @typescript-eslint/default-param-last */
import { useQuery } from '@tanstack/react-query'
import { companiesAPI } from '../utils/apis'

const getCompanies = async (params: any) => {
  const response = await companiesAPI.get('/', { params })
  return response.data
}

export default function useCompanies(params: any, search: string) {
  return useQuery([`dashboard${search}`], () => getCompanies(params))
}
