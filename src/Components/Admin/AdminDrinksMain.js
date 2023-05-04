import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; 





const Drinks = () => {
  const { drinks } = useSelector(state => state)
  const navigate = useNavigate()

  return (
    <div style={{margin: 'auto', maxWidth: "80%", fontSize:"1.4rem", padding:"1rem"}} >
      <h1> Master Drinks List </h1>
      
      <Link to={`/admin/drinks/create`} > Create a new drink </Link> 
     
      <ul> 
        {
          drinks.map(drink => {
            return (
              <ul>
              <li key= {drink.id}> 
                <Link to={`/admin/drinks/${drink.id}`}> {drink.name} </Link>
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



export default Drinks;