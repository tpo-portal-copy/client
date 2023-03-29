import { useQuery } from '@tanstack/react-query'
import { recentNotificationsAPI } from '../utils/apis'
import { getDataFromLocalStorage } from '../utils/functions'

const getNotifications = async () => {
  const response = await recentNotificationsAPI.get('/', {
    headers: { Authorization: `Bearer ${getDataFromLocalStorage('access_token')}` },
  })
  return response.data
}

export default function useRecentNotifications() {
  return useQuery(['recentNotifications'], () => getNotifications())
}
