import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom'; 
import { deleteDrink } from '../../store/drinks'




const Drink = () => {
const { drinks } = useSelector(state => state)
const params = useParams()
const dispatch = useDispatch()
const navigate = useNavigate()

const destroy = async() => {
  await dispatch(deleteDrink(drink))
  navigate('/admin/drinks')
}

const drink = drinks.find(drink => {  
  return drink.id === params.id
})


if (!drink) {
  return null
}


return (
  <div>
    <h1> {drink.name} </h1>
    <ul>
      <li> Category: {drink.category} </li>
      <img src= {`${drink.imageURL}`} alt="drink image"></img>
      <li> {drink.description} </li>

    </ul>


    <button onClick= {destroy}> delete drink </button>

  </div>
)
}

export default Drink;