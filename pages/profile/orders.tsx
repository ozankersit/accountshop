import React from 'react'
import ProtectedRoute from '../../components/routes/ProtectedRoute'
import ProfileLeftMenu from './ProfileLeftMenu'

const Orders = () => {
  return (
    <ProtectedRoute>
    <ProfileLeftMenu>
      <div className='pl-[50px] max-w-xs rounded-md'>
        <div>
          <span>Orders</span>
        </div>
      </div>
    </ProfileLeftMenu>
    </ProtectedRoute>
  )
}

export default Orders