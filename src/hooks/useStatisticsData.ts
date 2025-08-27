import { useQuery } from 'react-query'
import { statisticsAPI } from '../utils/apis'

const getStatisticsData = async (params: any) => {
  const response = await statisticsAPI.get('/', {
    params,
  })
  return response.data
}

export default function useStatisticsData(params?: any, job?: string, session?: string) {
  return useQuery([`statistics${job}${session}`], () => getStatisticsData(params))
}
