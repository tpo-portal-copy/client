/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query'
import { statisticsDetailsAPI } from '../utils/apis'

const getStatisticsData = async (params: any) => {
  const response = await statisticsDetailsAPI.get('/', {
    params,
  })
  return response.data
}

export default function useStatisticsDetails(params?: any, job?: string, session?: string) {
  return useQuery([`statistics${job}${session}`], () => getStatisticsData(params))
}
