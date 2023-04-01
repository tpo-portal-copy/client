import { useQuery } from 'react-query'
import { statisticsDetailsAPI } from '../utils/apis'

const getStatisticsDetailsData = async (company: string, jobType: string, session: string) => {
  const response = await statisticsDetailsAPI.get(
    `/?company=${company}&jtype=${jobType}&session=${session}`,
  )
  return response.data
}

export default function useStatisticsDetailsData(company: string, job: string, session: string) {
  return useQuery([`statistics${company}${job}${session}`], () =>
    getStatisticsDetailsData(company, job, session),
  )
}
