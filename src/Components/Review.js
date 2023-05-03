import { Link } from 'react-router-dom';
import { Box, Button, IconButton, TableCell, TableRow } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const ReviewItem = ({ review, deleteReview }) => (
  <TableRow>
    <TableCell>{review.id}</TableCell>
    <TableCell>{review.rating}</TableCell>
    <TableCell>{review.subject}</TableCell>
    <TableCell>{review.product.name}</TableCell>
    <TableCell>{review.userId}</TableCell>
    <TableCell>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton component={Link} to={`/reviews/${review.id}`}>
          <Edit />
        </IconButton>
        <IconButton onClick={(event) => deleteReview(event, review)}>
          <Delete />
        </IconButton>
      </Box>
    </TableCell>
  </TableRow>
);

export default ReviewItem;