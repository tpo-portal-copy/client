import { useQuery } from '@tanstack/react-query'
import { statisticsDetailsAPI } from '../utils/apis'
import { getDataFromLocalStorage } from '../utils/functions'

const getStatisticsDetailsData = async (company: string, jobType: string, session: string) => {
  const response = await statisticsDetailsAPI.get(
    `/?company=${company}&jtype=${jobType}&session=${session}`,
    {
      headers: {
        Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
      },
    },
  )
  return response.data
}

export default function useStatisticsDetailsData(company: string, job: string, session: string) {
  return useQuery([`statistics${company}${job}${session}`], () =>
    getStatisticsDetailsData(company, job, session),
  )
}
