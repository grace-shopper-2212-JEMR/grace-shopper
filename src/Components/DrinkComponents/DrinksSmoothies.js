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




const DrinksSmoothies = () =>{
  const { drinks } = useSelector(state => state);
  const dispatch = useDispatch()
  const navigate = useNavigate()  
  
  if (!drinks){return null}

  let smoothies = drinks.filter(d => d.category === 'smoothie')
  

  const _moreDetails =(drink)=>{
    // console.log(drink.id, 'more details')
    navigate(`/menu/${drink.id}`)
  }
  const _addToCart =(drink)=>{
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

  {smoothies.map(drink => {
        return (
          <Card key={ drink.id }sx={{ 
            maxWidth: 375,
            ':hover':{
              boxShadow: 5
            },
            display: 'flex', 
            flexDirection: 'column' 
            }}>
              <Link to={`../menu/${drink.id}`}>
              <CardMedia
                component="img"
                image={drink.imageUrl}
                alt={drink.name}
                sx={{ 
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  padding:"0", 
                  borderRadius: ".5rem",
                }}
                />
                </Link>
        <CardContent  sx={{flexGrow: 1}}>
          <Typography gutterBottom variant="h5" component="div">
            {drink.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {drink.name} and we'll insert a description
          </Typography>
        </CardContent>
          <CardActionArea sx={{textAlign:'center'}}>
        <Button component='span' onClick={(ev) => _moreDetails(drink)} size="small">More Details</Button>
        <Button component='span' onClick={(ev) => _addToCart(drink)} size="small">Add to Cart</Button>
      </CardActionArea>
    </Card>
        )
      })}
    </Box>
  </>
  )
}

export default DrinksSmoothies
