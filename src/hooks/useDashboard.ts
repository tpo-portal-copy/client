/* eslint-disable @typescript-eslint/default-param-last */
import { useQuery } from '@tanstack/react-query'
import { dashboardAPI } from '../utils/apis'
import { getDataFromLocalStorage } from '../utils/functions'

const getAnnouncements = async (params: any) => {
  const response = await dashboardAPI.get('/', {
    params,
    headers: {
      Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
    },
  })
  return response.data
}

export default function useDashboard(params: any, type: string) {
  return useQuery([`dashboard${type}`], () => getAnnouncements(params))
}
