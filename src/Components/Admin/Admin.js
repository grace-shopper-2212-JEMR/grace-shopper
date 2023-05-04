import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';  


const Admin = () => {

return (
  <div>
    <h1> Welcome to the Admin Pages </h1>

    <Link to={`/admin/drinks`} > Modify Drinks </Link>
    <Link to={`/admin/merch`} > Modify Merch </Link>

  </div>
)
}

export default Admin;
