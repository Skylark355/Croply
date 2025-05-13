import React from 'react'
import "./Modal.css"
import { useNavigate } from 'react-router-dom'

const Modal = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <div className='modal-overlay'>
    <div className='modal-container'>
      <button className='close-button' onClick={onClose}>x</button>
      <div className="sign">
        <button 
        className='signup-as-a-farmer'
        onClick={() => {navigate("/auth")}}
        >
          Sign up as a farmer
          </button>
        <button className='signup-as-a-buyer'>Sign up as a buyer</button>
      </div>
    </div>
  </div>
  )
}

export default Modal
