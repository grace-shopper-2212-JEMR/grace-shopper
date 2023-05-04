import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Checkout = ()=> {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();
  const products = cart.lineItems;

  return (
    <>Checkout page</>
  )
}

export default Checkout