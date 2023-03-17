import axios from 'axios'
import { COMPANIES_API, DRIVES_API, EXPERIENCES_API, STUDENT_API } from './constants'

export const studentAPI = axios.create({
  baseURL: STUDENT_API,
  headers: {
    Authorization: `Bearer `,
  },
})

export const drivesAPI = axios.create({
  baseURL: DRIVES_API,
})

export const experiencesAPI = axios.create({
  baseURL: EXPERIENCES_API,
})

export const companiesDetailsAPI = axios.create({
  baseURL: COMPANIES_API,
})
