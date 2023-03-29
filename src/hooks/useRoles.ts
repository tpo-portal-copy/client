/* eslint-disable @typescript-eslint/default-param-last */
import { useQuery } from '@tanstack/react-query'
import { rolesAPI } from '../utils/apis'
import { getDataFromLocalStorage } from '../utils/functions'

const getRoles = async () => {
  const response = await rolesAPI.get('/', {
    headers: {
      Authorization: `Bearer ${getDataFromLocalStorage('access_token')}`,
    },
  })
  return response.data
}

export default function useRoles() {
  return useQuery([`dashboard`], () => getRoles())
}
