
import React, {useState} from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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

const Merch = () =>{
  const {id} = useParams();
  const { merches } = useSelector(state => state);
  const [expanded, setExpanded] = useState(false);
  if (!merches){return null}

  const merch = merches.find(d => d.id===id)
  if (!merch){return null}

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


  return (
    <div id="productDiv" >
    <div id="productDivLeft">
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
        component="img"
        height="345"
        image={ merch.imageUrl }
        alt={ merch.name }
      />
    </Card>
     </div>

     { /* <h2>This is the page for a SINGLE {merch.name} detail page</h2>
    </div> */}
  
    {/* <Card sx={{ maxWidth: 345 }}>
       <CardMedia
         sx={{ height: 140 }}
         image={merch.imageUrl}
         title={merch.name}
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
             {merch.name}
         </Typography>
         <Typography variant="body2" color="text.secondary">
             Size: {merch.size}
             
         </Typography>
       </CardContent>
       <CardActions>
         <Button size="small">Add to Order</Button>
       </CardActions>
     </Card> */}

    <div id="productDivright">
     <Card sx={{ maxWidth: 345 }}>
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
        title={ merch.name }
        subheader= {'Size: ' + merch.size + ' lets put the price here as well?'}
      />
      {/* <CardMedia
        component="img"
        height="194"
        image={ merch.imageUrl }
        alt={ merch.name }
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Other info about the merch...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <CardActions>
         <Button size="small">Add To Order</Button>
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
            Maybe we include something special about the item for the drop down?
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    </div>
  )
}

export default Merch