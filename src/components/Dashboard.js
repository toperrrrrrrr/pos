
import React, { useState } from 'react';
import './mycss.css';
import bg from '../img/bg.svg';

const Dashboard = () => {

  return (
    <>
 <div className='login-bg'>
 <img src={bg} className='logo'></img>
        <div className='login-box'>
          
          <div className='screen_content'>
            <h1>Welcome to dashboard</h1>

          </div>
        </div>
        
      </div>
      
    </>
  );
};


export default Dashboard;