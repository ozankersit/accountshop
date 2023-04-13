import React from 'react'
import ProtectedRoute from '../../components/routes/ProtectedRoute'

const Dashboard = () => {
  return (
    <ProtectedRoute>
    <div>dashboard</div>
    </ProtectedRoute>
    
  )
}

export default Dashboard