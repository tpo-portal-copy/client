import axios from 'axios'
import { STUDENT_API, STUDENT_INTERN_DETAILS_API, STUDENT_PLACEMENT_DETAILS_API } from './constants'

export const studentAPI = axios.create({
  baseURL: STUDENT_API,
  headers: {
    Authorization: `Bearer `,
  },
})

export const placementDetailsAPI = axios.create({
  baseURL: STUDENT_PLACEMENT_DETAILS_API,
  headers: {
    Authorization: `Bearer `,
  },
})

export const internDetailsAPI = axios.create({
  baseURL: STUDENT_INTERN_DETAILS_API,
  headers: {
    Authorization: `Bearer `,
  },
})
