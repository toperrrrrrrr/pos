import React, { useState } from "react";

// import "./mycss.css";

// export default function alert() {


//   const toggleConfirmation = () => {
//     setShowConfirmation(!showConfirmation);
//   };
  
//   return (
//     <>
//     <div>
//           {showConfirmation && (
//             <div className="confirmation-overlay" onClick={toggleConfirmation}>
//               <div className="confirmation-box">
//                 <h2>incorrect Credentials</h2>
//                 <div className="confirmation-buttons">
//                   <button onClick={toggleConfirmation} className="box btn">Exit</button>
//                 </div>
//               </div>
//             </div>
//           )}
//       </div>
//     </>
//   )
// }



const alert = ({ message, type, onClose }) => {
  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default alert;
