import React, {useState, useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


const Merch = () =>{

  const {id} = useParams();
  const { merches } = useSelector(state => state);

  if (!merches){return null}

  const merch = merches.find(d => d.id===id)
  if (!merch){return null}
  return (
    <div>
      <h2>This is an individual Merch page for {merch.name}.</h2>
    </div>
  )
}

export default Merch