import React, {useState, useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import SubNavMerch from './SubNavMerch'

const Merchs = () =>{
  return (
    <div>
      <h2>This is overall Merch page.</h2>
      < SubNavMerch />
    </div>
  )
}

export default Merchs