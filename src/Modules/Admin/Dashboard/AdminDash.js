import React, { useState } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import './AdminDash.css';
import HomePage from "../../../assets/Homepage.jpeg";

import Cooks from '../Cooks/Cooks';
import Payments from '../Payments/Payments';
import Feedback from '../Feedback/Feedback';

function AdminDash() {
  const [activeComponent, setActiveComponent] = useState('orders'); 

  return (
    <div className="admin-container"> 
    {/* <img src={HomePage} alt='Home'/> */}
      <Navbar setActiveComponent={setActiveComponent} /> 
      {activeComponent === 'cooks' && <Cooks/>}
      {activeComponent === 'payments' && <Payments/>} 
      {activeComponent === 'feedbacks' && <Feedback/>} 
    </div>
  );
}

export default AdminDash;