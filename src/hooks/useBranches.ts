import { useQuery } from 'react-query'
import { branchesAPI } from '../utils/apis'

const getBranches = async (id: number) => {
  const response = await branchesAPI.get(`/${id}`)
  return response.data
}

export default function useBranches(id: number) {
  return useQuery([`branches${id}`], () => getBranches(id))
}
