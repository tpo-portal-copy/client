import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { companiesListAPI, drivesAPI } from '../utils/apis'

const getExperienceFilterOptionsList = async () => {
  const [response1, response2] = await axios.all([
    companiesListAPI.get('/'),
    drivesAPI.get('/getroles'),
  ])

  return [response1.data, response2.data]
}

export default function useExperienceFilterOptionsList() {
  return useQuery(['experienceFiltersList'], () => getExperienceFilterOptionsList())
}
