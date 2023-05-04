import React, {useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import { useParams, Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {addToCart} from "../../store"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const DrinkProductPage = () =>{
  const dispatch = useDispatch()
  const {id} = useParams();
  const { drinks, reviews } = useSelector(state => state);
  const [expanded, setExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  if (!drinks){return null}

  const drink = drinks.find(d => d.id===id)
  if (!drink){return null}

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const clickToCart = () => {
    dispatch(addToCart(drink, quantity))
  }

  return (
    <div id="ProductDiv" >
      <div id="productDivLeft">
        <Card>
        <CardMedia
            component="img"
            height="600"
            image={ drink.imageUrl }
            alt={ drink.name }
          />
          </Card>
        </div>
     
     <div id="productDivRight">

     <Card>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={ drink.name }
        subheader= {'Size: ' + drink.size + ' lets put the price here as well?'}
      />
      {/* <CardMedia
        component="img"
        height="194"
        image={ drink.imageUrl }
        alt={ drink.name }
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Ingredients for the drink maybe? Other things that we want?
          <br />
          <Link to='/product/${productId}/reviews'>Read The Reviews({reviews.length})</Link>
          { drink.isHot ? 'Item is Hot, CAUTION' : ''}
          <br />
          { drink.isTea ? "Sip it or Spill it, Enjoy your Tea!" : ""}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <CardActions>
          <Box sx={{ minWidth: 120 }}>
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
        <Button size="small" onClick={()=> clickToCart()}>Add To Cart</Button>
        </CardActions>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Info:</Typography>
          <Typography paragraph>
            {drink.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    </div>
  )
}

export default DrinkProductPage




