import React, {useState, useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import SubNavDrinks from "./SubNavDrinks";
import DrinkProductPage from "./DrinkProductPage";

// import { fetchDrinks, createDrink, editDrink, deleteDrink } from "../store/drinks";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// NOTES

  // ALL OF THESE CARDS WILL BE EVENTUALLY MAPPED WHEN WE HAVE THE DATA. WE'LL DO SOMETHING LIKE {drink.image} and {drink.description} or something.

  // RESEARCH HOW TO DO AUTHORIZATION, WHERE AN ADMIN CAN ADD/UPDATE/DELETE A DRINK. I THINK IT PROBABLY JUST NEEDS AN 'ADMIN' TITLE AND YOU CAN DO if(auth.title === 'admin'){code}



const DrinkProducts = () =>{
  const { drinks } = useSelector(state => state);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const _moreDetails =(drink)=>{
    console.log(drink)
    // console.log(drink.id, 'more details')
    navigate(`/menu/${drink.id}`)
  }
  const _addToCart =(drink)=>{
    console.log(drink)
    console.log(drink.id, 'add to cart')
  }

  if (!drinks){return null}

  return (
    <>
      < SubNavDrinks />
    <Box
      sx={{

        m: 5,
        mx: 'auto',
        px: '1rem',
        maxWidth: 1200,
        display: 'grid',
        columnGap: 1,
        rowGap: '1rem',
        gridTemplateColumns: 'repeat(3, 1fr)',
        borderColor: 'primary.main',
        borderRadius: "2rem",
      }}>

      {drinks.map(drink => {
        return (
      <Card key={ drink.id }sx={{ 
      maxWidth: 425,
      ':hover':{
        boxShadow: 2,
        zIndex: 2
      }}}>
        <Link to={`${drink.id}`}>
        <CardMedia
          component="img"
          image={drink.imageUrl}
          alt={drink.name}
          sx={{ padding:"0", borderRadius: "1rem", objectFit: "contain" }}
          />
          </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {drink.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {drink.name} and we'll insert a description
          </Typography>
        </CardContent>
          <CardActionArea sx={{textAlign:'center'}}>
        <Button onClick={(ev) => _moreDetails(drink)} size="small">More Details</Button>
        <Button onClick={(ev) => _addToCart(drink)} size="small">Add to Cart</Button>
      </CardActionArea>
    </Card>
        )
      })}
    </Box>
  </>
  )
}

export default DrinkProducts