import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';  


const Admin = () => {

return (
  <div style={{margin: 40}}>
    <h1> Welcome to the Admin Pages </h1>

    <Link to={`/admin/drinks`} style={{margin: 10}} > Modify Drinks </Link>
    <Link to={`/admin/merch`} style={{margin: 10}} > Modify Merch </Link>

  </div>
)
}

export default Admin;
