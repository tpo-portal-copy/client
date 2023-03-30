import { useQuery } from 'react-query'
import { rolesAPI } from '../utils/apis'

const getRoles = async () => {
  const response = await rolesAPI.get('/')
  return response.data
}

export default function useRoles() {
  return useQuery([`dashboard`], () => getRoles())
}
