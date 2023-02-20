import { useQuery } from 'react-query'
import { companiesDetailsAPI } from '../utils/apis'

const getCompaniesData = async () => {
  const response = await companiesDetailsAPI.get('/')
  return response.data
}

export default function useCompaniesDetails() {
  return useQuery('companies', getCompaniesData)
}
