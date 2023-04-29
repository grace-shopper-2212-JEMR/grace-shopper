import React, {useState, useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import SubNavMerch from './SubNavMerch'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


const Merches = () =>{

  const { merches } = useSelector(state => state);
  const dispatch = useDispatch()
  const navigate = useNavigate()  
  
  if (!merches){return null}

  const _moreDetails =(merch)=>{

    navigate(`/merch/${merch.id}`)
  }
  const _addToCart =(merch)=>{
    console.log(merch.id, 'add to cart')
  }


  if (!merches){return null}

  return (
    <>
         < SubNavMerch />
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

  {merches.map(merch => {
        return (
      <Card key={ merch.id }sx={{ 
      maxWidth: 425,
      ':hover':{
        boxShadow: 2,
        zIndex: 2
      }}}>
        <Link to={`${merch.id}`}>
        <CardMedia
          component="img"
          image={merch.imageUrl}
          alt={merch.name}
          sx={{ padding:"0", borderRadius: "1rem", objectFit: "contain" }}
          />
          </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {merch.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {merch.name} and we'll insert a description
          </Typography>
        </CardContent>
          <CardActionArea sx={{textAlign:'center'}}>
        <Button onClick={(ev) => _moreDetails(merch)} size="small">More Details</Button>
        <Button onClick={(ev) => _addToCart(merch)} size="small">Add to Cart</Button>
      </CardActionArea>
    </Card>
        )
      })}
    </Box>
  </>
  )
}
export default Merches