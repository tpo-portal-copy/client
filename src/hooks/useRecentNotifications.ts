import { useQuery } from 'react-query'
import { recentNotificationsAPI } from '../utils/apis'

const getNotifications = async () => {
  const response = await recentNotificationsAPI.get('/')
  return response.data
}

export default function useRecentNotifications() {
  return useQuery(['recentNotifications'], () => getNotifications())
}
