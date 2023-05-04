import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';  


const NotAdmin = () => {

return (
  <div>
    <h1 style={{margin: 40}}> You're not a registered administrator. Please contact your boss. </h1>
    <Link to='/home' style={{margin:40}}>Home</Link>
  </div>
)
}

export default NotAdmin;
