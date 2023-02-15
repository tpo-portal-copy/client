import { useQuery } from 'react-query'

export default function useDrives() {
  return useQuery('drives')
}
