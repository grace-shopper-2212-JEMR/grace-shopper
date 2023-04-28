import React, {useState, useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const DrinkProductPage = () =>{
  // const {drink} = props
  const {id} = useParams();
  const { drinks } = useSelector(state => state);

  if (!drinks){return null}

  const drink = drinks.find(d => d.id===id)
  if (!drink){return null}

  return (
    <>
    <div id="drinkProductDiv">

      <h2>This is the page for a SINGLE {drink.name} drink product. We'll put coffees and teas that people can order here.</h2>
    </div>
    </>

  )
}

export default DrinkProductPage