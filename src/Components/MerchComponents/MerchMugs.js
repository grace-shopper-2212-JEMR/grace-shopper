import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import SubNavMerch from './SubNavMerch'
import {addToCart} from "../../store"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const MerchMugs = () =>{

  const { merches } = useSelector(state => state);
  const dispatch = useDispatch()
  const navigate = useNavigate()  
  const { filterString } = useParams()
  const filter = filterString ? JSON.parse(filterString) : {}

  const mugs = merches.filter(m => m.category == 'mug')

  
  if (!merches){return null}

  const _moreDetails =(merch)=>{
    navigate(`/merch/${merch.id}`)
  }
  const _addToCart = (merch, quantity)=>{
    dispatch(addToCart(merch, quantity))
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
    navigate(`/merch/search/${JSON.stringify(_filter)}`)
  }

  if (!merches){return null}

const Merch = ({merch}) => {
    const [quantity, setQuantity] = useState(1);
    return (
      <Card key={ merch.id }sx={{ 
      maxWidth: 375,
      ':hover':{
        boxShadow: 5
      },
      display: 'flex', 
      flexDirection: 'column' 
      }}>
        <Link to={`${merch.id}`}>
        <CardMedia
          component="img"
          image={merch.imageUrl}
          alt={merch.name}
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
            {merch.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {merch.description}
          </Typography>
        </CardContent>
          <CardActionArea sx={{textAlign:'center', alignItems:'center'}}>
        <Button component='span' onClick={(ev) => _moreDetails(merch)} size="small">More Details</Button>
        <CardActions>
          <Box sx={{ minWidth: 130 }}>
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
        <Button component='span' size="small" onClick={()=> _addToCart(merch, quantity)}>Add To Cart</Button>
        </CardActions>
      </CardActionArea>
    </Card>
        )
  }

  return (
    <>
      < SubNavMerch />
         <form onSubmit={ ev => ev.preventDefault() } style={{padding:"1rem", maxWidth: 275 }}>
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
          borderRadius: "1rem",
        }}>  
  
      { mugs.filter( merch => {
            if(filter.name && !merch.name.includes(filter.name)){
              return false
            }
            return true
          }).map(merch => {
        return <Merch merch = {merch} key={ merch.id } />
      })}
    </Box>
  </>
  )
}
export default MerchMugs