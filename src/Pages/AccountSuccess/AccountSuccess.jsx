import React from 'react'
import "./AccountSuccess.css"
import { FaCheck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const AccountSuccess = () => {
     const navigate = useNavigate()
  return (
   

    <div className='accountSuccess'>
      <h1>Croply</h1>
      <div className="check">
        <FaCheck />
        </div>
      <h2>Successful</h2>
      <span>Your account is successfully created</span>
      <button className='btn'
      onClick={() => {
        navigate("/dashboard")
      }}
      >Go to dashboard</button>
    </div>
  )
}

export default AccountSuccess
