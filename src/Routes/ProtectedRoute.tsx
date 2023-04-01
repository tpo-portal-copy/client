import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { isAuthenticated, isStudentDetailsFormFilled } from '../utils/functions'

interface ProtectedRouteProps {
  children: ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation()

  if (isAuthenticated() === false) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (location.pathname === '/student-details-form') return <> {children} </>

  if (isStudentDetailsFormFilled() === false) {
    return <Navigate to="/student-details-form" />
  }

  return <> {children} </>
}
