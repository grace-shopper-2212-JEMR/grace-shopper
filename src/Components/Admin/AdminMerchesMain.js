import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 


const Merches = () => {
  const { merch } = useSelector(state => state)
  
  return (
    <div>
      <h1> Master Merches List </h1>
  
      <ul>
        
  
      </ul>
  
  
      {/* <Link to={`/admin/drinks/create`} > Create a new Drink </Link> */}
  
    </div>
  )
  }
  
  export default Merches;