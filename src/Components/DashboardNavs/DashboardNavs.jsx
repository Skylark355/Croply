import React from 'react'
import DashBpardTopBar from '../DashboardTopBar/DashBpardTopBar'
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar'
import { Outlet } from 'react-router-dom'

const DashboardNavs = () => {
  return (
    <div>
        <DashBpardTopBar />
        <DashboardSidebar />

        <Outlet />
      
    </div>
  )
}

export default DashboardNavs
