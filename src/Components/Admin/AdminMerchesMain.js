import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 


const Merches = () => {
  const { merches } = useSelector(state => state)
  
  return (
    <div style={{margin: 'auto', maxWidth: "80%", fontSize:"1.4rem", padding:"1rem"}} >
      <h1> Master Merch List </h1>
      <Link to={`/admin/merch/create`} > Create new merch </Link> 
      <ul>
        {
      merches.map(drink => {
            return (
              <ul>
              <li key= {drink.id}> 
                <Link to={`/admin/merch/${drink.id}`}> {drink.name} </Link>
              </li>
              </ul>
            )
        })    
      }
      </ul>
  
    <h5><Link to={'/admin'}>Back to Admin Home</Link></h5>
    
    </div>
  )
  }
  
  export default Merches;