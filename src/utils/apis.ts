import axios from 'axios'
import { COMPANIES_API, DRIVES_API, STUDENT_API, STATISTICS_API } from './constants'

export const studentAPI = axios.create({
  baseURL: STUDENT_API,
  headers: {
    Authorization: `Bearer `,
  },
})

export const drivesAPI = axios.create({
  baseURL: DRIVES_API,
  headers: {
    Authorization: `Bearer `,
  },
})

export const companiesDetailsAPI = axios.create({
  baseURL: COMPANIES_API,
})

export const statisticsDetailsAPI = axios.create({
  baseURL: STATISTICS_API,
})
