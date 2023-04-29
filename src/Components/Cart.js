import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Cart = ()=> {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();
  const products = cart.lineItems
  return (
    <div>
      <h1>Cart:</h1>

      <div>
        {products.map(prod => {
          return (
        <Accordion key={prod.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          <Typography>{prod.quantity} - {prod.product.name}</Typography>
          </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Size: {prod.product.size}
              </Typography>
            </AccordionDetails>
        </Accordion>
          )
        })
        }
      </div>
    
      <pre>
        {
          JSON.stringify(cart, null, 2)
        }
      </pre>
    </div>
  );
};

export default Cart;

