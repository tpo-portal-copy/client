import { useQuery } from 'react-query'
import { dashboardAPI } from '../utils/apis'

const getAnnouncements = async (params: any) => {
  const response = await dashboardAPI.get('/', {
    params,
  })
  return response.data
}

export default function useDashboard(params: any, type: string) {
  return useQuery([`dashboard${type}`], () => getAnnouncements(params))
}
