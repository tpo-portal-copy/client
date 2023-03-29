/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query'
import { statisticsAPI } from '../utils/apis'
import { getDataFromLocalStorage } from '../utils/functions'

const getStatisticsData = async (params: any) => {
  const response = await statisticsAPI.get('/', {
    params,
    headers: {
      Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
    },
  })
  return response.data
}

export default function useStatisticsData(params?: any, job?: string, session?: string) {
  return useQuery([`statistics${job}${session}`], () => getStatisticsData(params))
}
