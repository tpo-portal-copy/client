import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { companiesListAPI, drivesAPI } from '../utils/apis'
import { getDataFromLocalStorage } from '../utils/functions'

const getExperienceFilterOptionsList = async () => {
  const [response1, response2] = await axios.all([
    companiesListAPI.get('/', {
      headers: {
        Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
      },
    }),
    drivesAPI.get('/getroles', {
      headers: {
        Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
      },
    }),
  ])

  return [response1.data, response2.data]
}

export default function useExperienceFilterOptionsList() {
  return useQuery(['experienceFiltersList'], () => getExperienceFilterOptionsList())
}
