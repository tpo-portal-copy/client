import { useQuery } from 'react-query'
import { TPOStatsAPI as statisticsAPI } from '../utils/apis'

const getStatisticsData = async (params: any) => {
  const response = await statisticsAPI.get('/', {
    params,
  })
  return response.data
}

export default function useTPOStats(params?: any, job?: string, session?: string) {
  return useQuery([`tpostatistics${job}${session}`], () => getStatisticsData(params))
}
