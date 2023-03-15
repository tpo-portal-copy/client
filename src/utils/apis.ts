import axios from 'axios'
import {
  COMPANIES_API,
  DRIVES_API,
  STUDENT_API,
  STATISTICS_API,
  RECENT_NOTIFICATIONS_API,
  DASHBOARD_API,
  ROLES_API,
  COMPANIES_ORDERWISE_API,
} from './constants'

export const studentAPI = axios.create({
  baseURL: STUDENT_API,
})

export const drivesAPI = axios.create({
  baseURL: DRIVES_API,
})

export const companiesDetailsAPI = axios.create({
  baseURL: COMPANIES_ORDERWISE_API,
})

export const statisticsDetailsAPI = axios.create({
  baseURL: STATISTICS_API,
})

export const recentNotificationsAPI = axios.create({
  baseURL: RECENT_NOTIFICATIONS_API,
})

export const dashboardAPI = axios.create({
  baseURL: DASHBOARD_API,
})

export const companiesAPI = axios.create({
  baseURL: COMPANIES_API,
})

export const rolesAPI = axios.create({
  baseURL: ROLES_API,
})
