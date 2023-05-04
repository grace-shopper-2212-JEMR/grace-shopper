import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { removeFromCart, addToCart } from '../store';

const Cart = ()=> {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();
  const products = cart.lineItems

  const _removeFromCart = (product, quantityToRemove) => {
    dispatch(removeFromCart(product, quantityToRemove))
  }

  const _addToCart = (product, quantity) => {
    dispatch(addToCart(product, quantity))
  }

  return (
    <div>
      <h1>Cart:</h1>

      <div>
        {products.sort((a, b) => a.createdAt.localeCompare(b.createdAt)).map(prod => {
          return (
        <Accordion key={prod.id}  disableGutters >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          <Typography><Button onClick={() => _removeFromCart(prod.product, 1)}>-</Button>{prod.quantity}<Button onClick={() => _addToCart(prod.product, 1)}>+</Button> {prod.product.name} <Button onClick={() => _removeFromCart(prod.product, prod.quantity)}>X</Button> </Typography>
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

