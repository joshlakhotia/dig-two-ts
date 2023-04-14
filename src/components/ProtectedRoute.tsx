import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/AuthContext';

type ProtectedRouteProps = {
  children: React.ReactNode
}

const ProtectedRoute = ({children}: ProtectedRouteProps) => {
  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to='/signin' />
  }
  return <>{children}</>
}

export default ProtectedRoute