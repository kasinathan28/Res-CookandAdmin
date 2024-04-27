import React, { useState } from 'react';
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';

function Navbar({ setActiveComponent }) { // Accept setActiveComponent as a prop
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponentLocal] = useState('orders'); // Local state to manage active component
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const switchComponent = (componentName) => {
    setActiveComponentLocal(componentName); // Update local state
    setActiveComponent(componentName); // Update parent state
    setSidebarOpen(false); 
  };

  const handleLogout = () => {
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <div className='Navbar'>
      <div className="navbar-container">
        <div className="navbar-header">
          <div
            className={`hamburger ${sidebarOpen ? "open" : ""}`}
            onClick={toggleSidebar}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <h1>Food and Bev Station</h1>
        </div>
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <ul>
            <li className={`category-item ${activeComponent === 'orders' ? 'active' : ''}`} onClick={() => switchComponent('orders')}>Orders</li>
            <li className={`category-item ${activeComponent === 'availableFoods' ? 'active' : ''}`} onClick={() => switchComponent('availableFoods')}>Available Foods</li>
            <li className="category-item" onClick={handleLogout}>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
