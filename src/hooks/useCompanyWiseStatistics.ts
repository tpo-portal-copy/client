import { useQuery } from 'react-query'
import { companyWiseStatisticsAPI } from '../utils/apis'

const getcompanyWiseStatistics = async (
  company: string,
  type: string,
  clusterc: string,
  course: string,
) => {
  const response = await companyWiseStatisticsAPI.get(
    `/?type=${type}&company=${company}&clusterc=${clusterc}`,
  )
  return response.data
}

export default function useCompanyWiseStatistics(
  company: string,
  type: string,
  clusterc: string,
  course: string,
) {
  return useQuery(['selectedStudents', company, type, clusterc, course], () =>
    getcompanyWiseStatistics(company, type, clusterc, course),
  )
}
