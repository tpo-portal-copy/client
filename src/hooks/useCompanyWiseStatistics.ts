import { useQuery } from 'react-query'
import { companyWiseStatisticsAPI } from '../utils/apis'

const getcompanyWiseStatistics = async (
  company: string,
  type: string,
  cluster: string,
  course: string,
  branch: string,
) => {
  const response = await companyWiseStatisticsAPI.get(
    `/?type=${type}&company=${company}&cluster=${cluster}&course=${course}&branch=${branch}`,
  )
  return response.data
}

export default function useCompanyWiseStatistics(
  company: string,
  type: string,
  cluster: string,
  course: string,
  branch: string,
) {
  return useQuery(['selectedStudents', company, type, cluster, course, branch], () =>
    getcompanyWiseStatistics(company, type, cluster, course, branch),
  )
}
