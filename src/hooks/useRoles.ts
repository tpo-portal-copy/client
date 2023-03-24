/* eslint-disable @typescript-eslint/default-param-last */
import { useQuery } from '@tanstack/react-query'
import { rolesAPI } from '../utils/apis'

const getRoles = async () => {
  const response = await rolesAPI.get('/')
  return response.data
}

export default function useRoles() {
  return useQuery([`dashboard`], () => getRoles())
}
