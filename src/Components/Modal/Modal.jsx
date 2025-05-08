import React from 'react'
import "./Modal.css"

const Modal = ({ onClose }) => {
  return (
    <div className='modal-overlay'>
    <div className='modal-container'>
      <button className='close-button' onClick={onClose}>x</button>
      <div className="sign">
        <button className='signup-as-a-farmer'>Sign up as a farmer</button>
        <button className='signup-as-a-buyer'>Sign up as a buyer</button>
      </div>
    </div>
  </div>
  )
}

export default Modal
