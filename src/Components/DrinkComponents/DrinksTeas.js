import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import SubNavDrinks from "./SubNavDrinks";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {addToCart} from "../../store"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CardActions from '@mui/material/CardActions';

const DrinksTeas = () =>{
  const { drinks } = useSelector(state => state);
  const dispatch = useDispatch()
  const navigate = useNavigate()  
  const { filterString } = useParams()
  const filter = filterString ? JSON.parse(filterString) : {}

  if (!drinks){return null}

  let teas = drinks.filter(d => d.category == 'tea')


  const Drink = ({drink}) => {

    const [quantity, setQuantity] = useState(1);
    return (
      <Card key={ drink.id }sx={{ 
      maxWidth: 375,
      ':hover':{
        boxShadow: 5
      },
      display: 'flex', 
      flexDirection: 'column' 
      }}>
        <Link to={`${drink.id}`}>
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
            {drink.description}
          </Typography>
        </CardContent>
          <CardActionArea onClick={(ev) => _moreDetails(drink)} sx={{textAlign:'center', alignItems:'center'}} >
        <Button component='span' onClick={(ev) => _moreDetails(drink)} size="small"
        sx={{ 
          fontSize: 15,
          ":hover": {textDecoration:"underline"}
          }}>More Details</Button>
        <CardActions sx={{justifyContent:"center" }}>
          <Box sx={{ minWidth: 75, justifyContent:"flex-end" }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={quantity}
                  label="quantity"
                  onChange={(ev) => setQuantity(ev.target.value) }
                >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
              </Select>
        
            </FormControl>
          </Box>
        <Button component='span' size="small" onClick={()=> _addToCart(drink, quantity)}>Add To Cart</Button>
        </CardActions>
      </CardActionArea>
    </Card>
        )
  }

  const _moreDetails =(drink)=>{
    navigate(`/menu/${drink.id}`)
  }

  const _addToCart = (drink, quantity)=>{
    dispatch(addToCart(drink, quantity))
  }

  const search = (ev) => {
    ev.preventDefault()
    const _filter = {...filter}
    if(ev.target.name === "name"){
      if(ev.target.value){
        _filter.name = ev.target.value
      } else {
        delete _filter.name
      }
    }
    navigate(`/menu/search/${JSON.stringify(_filter)}`)
  }

  if (!drinks){return null}

  return (
    <>
      < SubNavDrinks />
      <form onSubmit={ ev => ev.preventDefault() } style={{padding: "1rem", maxWidth: 275 }}>
            <input value={ filter.name ? filter.name : '' } autoComplete='off' name='name' onChange={ search } placeholder='Search'/>
        </form>
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
            borderRadius: '1rem'
          }}>  

          { teas.filter( drink => {
              if(filter.name && !drink.name.toLowerCase().includes(filter.name.toLowerCase())){
                  return false
                }
                return true
              }).map(drink => {
            return <Drink drink = {drink} key={ drink.id } />
          })}
        </Box>
    </>
  )
}
export default DrinksTeas