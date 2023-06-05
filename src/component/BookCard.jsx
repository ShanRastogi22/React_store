import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import DeleteModel from './DeleteModel';
import { Dialog } from '@mui/material';

export default function ImgMediaCard({data}) {
  const navigate = useNavigate();
const [openModal, setOpenModal] = useState(false);


  const handleRoute = (item) => {
    navigate(`/edit_book/${data.id}`, {state: { item: item }});
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleClick = () =>{
    setOpenModal(true);
  }
  return (
    <>
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
        <Button size="small"onClick={handleClick}>Delet</Button>
      </CardActions>
    </Card>
    <Dialog maxWidth="md" open={openModal} onClose={handleCloseModal}>
    <DeleteModel 
    open={openModal} 
    onClose={handleCloseModal}
    /> 
    </Dialog>
    </>
  );
}