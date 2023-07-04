import React from 'react'
import '../mycss.css'

const Alerts = ({ isOpen, title, message, onClose, onConfirm }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
        <>
        <div className="confirmation-overlay">
            <div className="confirmation-box">
            <h2>{title}</h2>
            <p>{message}</p>
            <div className="confirmation-buttons">
                <button onClick={onConfirm} className="box btn">Confirm</button>
                <button onClick={onClose} className="box btn">Cancel</button>
            </div>
            </div>
        </div>
         </>
    );
  };
  
  export default Alerts;