import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; 





const Drinks = () => {
  const { drinks } = useSelector(state => state)
  const navigate = useNavigate()

  return (
    <div>
      <h1> Master Drinks List </h1>

      {/* <button onClick= {navigate(`/admin/drinks/create`)} > Create a new Drink </button> */}
      
      <Link to={`/admin/drinks/create`} > Create a new Drink </Link> 
     
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

    </div>
)
}



export default Drinks;