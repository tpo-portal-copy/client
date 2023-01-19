// example type of user
export type User = {
  name: string | null
  email: string | null
  imageUrl: string | null
}

export interface UserInfoProps {
  label: string
  value: string | number
}
