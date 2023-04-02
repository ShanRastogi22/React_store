import React,{useState} from 'react'
import Nav from '../../component/Nav'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { StyleBox } from '../Add_book/style'
import { TextField, Button } from '@mui/material'
const EditBook = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [ formData, setFormData ] = useState({
        Book_id: state.item.Book_id,
        Author_Name: state.item.Author_Name,
        Book_Discription: state.item.Book_Discription,
        Book_Name: state.item.Book_Name,
        Cover_image: state.item.Cover_image,
        id: state.item.id
    })
    console.log('nav', formData);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value
        })); 
    }

    const handleSubmit = async(e) => {
      e.preventDefault();

      await axios.patch(`http://localhost:8000/save-book-data/${formData.id}`, formData).then((res) => {
        if(res) {
          navigate('/view_book');
        }
      })
    }

  return (
    <div>
        <Nav />
      <StyleBox>
        <h1> Edit_books</h1>
        <form onSubmit={handleSubmit}>
          <TextField sx={{ width: '80%', margin: '10px'}} value={formData.Book_id} disabled  label='Book_id' name='Book_id'  variant='outlined' />
          <TextField sx={{ width: '80%', margin: '10px'}} value={formData.Book_Name} onChange={handleChange} label='Book_Name' name='Book_Name'  variant='outlined' type='text'/>
          <TextField sx={{ width: '80%', margin: '10px'}} value={formData.Book_Discription} onChange={handleChange} label='Book_Discription' name='Book_Discription' variant='outlined' type='text'/>
          <TextField sx={{ width: '80%', margin: '10px'}} value={formData.Author_Name} onChange={handleChange} label='Author Name' name='Author_Name'  variant='outlined' type='text'/>
          <TextField sx={{ width: '80%', margin: '10px'}} value={formData.Cover_image} onChange={handleChange} label='Cover_image' name='Cover_image' variant='outlined' type='text'/>
          <div>
          <Button sx={{m: 2}} variant='contained' color="primary" type="submit">Submit</Button>
        
          </div>
        </form>

      </StyleBox>
    </div>
  )
}

export default EditBook
