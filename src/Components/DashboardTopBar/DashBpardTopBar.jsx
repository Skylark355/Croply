import React from 'react'
import "./DashboardTopBar.css"
import user from "../../assets/Croply/user.png"

const DashBpardTopBar = () => {
  return (
    <div className='dashboard-top-bar'>
      <h1>Croply</h1>
      <div className="user">
        <img src={user} alt="" />
      </div>
    </div>
  )
}

export default DashBpardTopBar
