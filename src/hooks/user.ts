import { useContext } from 'react'
import { UserContext } from '@contexts/user'

export function useUser() {
  const context = useContext(UserContext)

  return context
}
