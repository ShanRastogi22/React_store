import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function ImgMediaCard({data}) {
  const navigate = useNavigate();
  const handleRoute = (item) => {
    navigate('/edit_book')
  }
  return (
    <Card sx={{ maxWidth: 345, minWidht: 345}}>
      <CardMedia
        component="img"
        height="200"
       src={data.Cover_image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.Book_Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.Book_Discription}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.Author_Name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleRoute(data)}>Edit</Button>
        <Button size="small">Delet</Button>
      </CardActions>
    </Card>
  );
}