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
  CLUSTERS_API,
  RESOURCES_API,
  STATES_API,
  CITIES_API,
  COURSES_API,
  BRANCHES_API,
  STATISTICS_DETAILS_API,
  EXPERIENCES_API,
  STUDENT_LOGIN_API,
  STUDENT_REGISTER_API,
  STUDENT_OTP_API,
} from './constants'
import { getDataFromLocalStorage } from './functions'

export const studentAPI = axios.create({
  baseURL: STUDENT_API,
  headers: {
    Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
  },
})

export const drivesAPI = axios.create({
  baseURL: DRIVES_API,
  headers: {
    Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
  },
})

export const experiencesAPI = axios.create({
  baseURL: EXPERIENCES_API,
  headers: {
    Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
  },
})

export const companiesListAPI = axios.create({
  baseURL: COMPANIES_API,
  headers: {
    Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
  },
})

export const companiesDetailsAPI = axios.create({
  baseURL: COMPANIES_ORDERWISE_API,
  headers: {
    Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
  },
})

export const statisticsAPI = axios.create({
  baseURL: STATISTICS_API,
  headers: {
    Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
  },
})

export const recentNotificationsAPI = axios.create({
  baseURL: RECENT_NOTIFICATIONS_API,
})

export const dashboardAPI = axios.create({
  baseURL: DASHBOARD_API,
  headers: {
    Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
  },
})

export const companiesAPI = axios.create({
  baseURL: COMPANIES_API,
  headers: {
    Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
  },
})

export const rolesAPI = axios.create({
  baseURL: ROLES_API,
  headers: {
    Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
  },
})

export const clustersAPI = axios.create({
  baseURL: CLUSTERS_API,
  headers: {
    Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
  },
})

export const resourcesAPI = axios.create({
  baseURL: RESOURCES_API,
  headers: {
    Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
  },
})

export const statesAPI = axios.create({
  baseURL: STATES_API,
  headers: {
    Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
  },
})

export const citiesAPI = axios.create({
  baseURL: CITIES_API,
  headers: {
    Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
  },
})

export const coursesAPI = axios.create({
  baseURL: COURSES_API,
  headers: {
    Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
  },
})

export const branchesAPI = axios.create({
  baseURL: BRANCHES_API,
  headers: {
    Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
  },
})

export const statisticsDetailsAPI = axios.create({
  baseURL: STATISTICS_DETAILS_API,
  headers: {
    Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
  },
})

export const studentLoginAPI = axios.create({
  baseURL: STUDENT_LOGIN_API,
})

export const studentRegisterAPI = axios.create({
  baseURL: STUDENT_REGISTER_API,
})

export const studentOtpAPI = axios.create({
  baseURL: STUDENT_OTP_API,
})
