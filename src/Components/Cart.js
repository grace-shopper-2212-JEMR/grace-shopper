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

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

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

  const getTotal = () => {
    let sum = 0
    products.forEach(product => {
      sum += product.product.price * product.quantity
    })
    return sum
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
                <br />
                Price: {prod.product.price}
              </Typography>
            </AccordionDetails>
        </Accordion>
        
          )
        })
        }

        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Cart Total: {getTotal()} Dollars
            </Typography>
       
          </CardContent>
          <CardActions>
            <Button size="small">Checkout</Button>
          </CardActions>
        </Card>
      </div>
        
      {/* <pre>
        {
          JSON.stringify(cart, null, 2)
        }
      </pre> */}
    </div>
  );
};

export default Cart;



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
