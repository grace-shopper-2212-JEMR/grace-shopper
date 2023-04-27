import React, {useState, useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import SubNavDrinks from "./SubNavDrinks";
import { useNavigate } from "react-router-dom";
import { fetchDrinks, createDrink, editDrink, deleteDrink } from "../store/drinks";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

// NOTES

  // ALL OF THESE CARDS WILL BE EVENTUALLY MAPPED WHEN WE HAVE THE DATA. WE'LL DO SOMETHING LIKE {drink.image} and {drink.description} or something.

  // RESEARCH HOW TO DO AUTHORIZATION, WHERE AN ADMIN CAN ADD/UPDATE/DELETE A DRINK. I THINK IT PROBABLY JUST NEEDS AN 'ADMIN' TITLE AND YOU CAN DO if(auth.title === 'admin'){code}

const DrinkProducts = () =>{
  const { drinks } = useSelector(state => state);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  
  if (!drinks){return null}
  console.log(drinks)


  return (
    <>
      < SubNavDrinks />
    <Box
      sx={{
        margin: 0,
        display: 'grid',
        columnGap: 1,
        rowGap: 1,
        gridTemplateColumns: 'repeat(3, 1fr)',
        borderColor: 'primary.main',
        borderRadius: 2,
      }}>

      {drinks.map(drink => {
        return (
      <Card key={ drink.id }sx={{ 
      maxWidth: 345,
      ':hover':{
        boxShadow: 2,
        zIndex: 2
      }}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={drink.imageUrl}
          alt={drink.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {drink.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {drink.name} and we'll insert a description
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        )
      })}
  
      {/* <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.ctfassets.net/v601h1fyjgba/3BPpnehRjlQ9xzGPcYU2lU/6ad989f0eb91676186dceeb8de1be459/Cappuccino.jpg"
          alt="Cappuccino"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cappuccino
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A traditional European double espresso with steamed milk
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.ctfassets.net/v601h1fyjgba/3BPpnehRjlQ9xzGPcYU2lU/6ad989f0eb91676186dceeb8de1be459/Cappuccino.jpg"
          alt="Cappuccino"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cappuccino
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A traditional European double espresso with steamed milk
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}
    </Box>
    <div>
      <h2>This is the Drink Products page. We'll put coffees and teas that people can order here.</h2>

    </div>
  </>
  )
}

export default DrinkProducts