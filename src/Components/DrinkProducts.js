import React, {useState, useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import SubNavDrinks from "./SubNavDrinks";

const DrinkProducts = () =>{
  return (
    <div>
      <h2>This is the Drink Products page. We'll put coffees and teas that people can order here.</h2>
      < SubNavDrinks />
    </div>
  )
}

export default DrinkProducts