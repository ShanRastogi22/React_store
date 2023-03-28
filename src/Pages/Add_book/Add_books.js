import React, {useState}from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from '../../component/Nav'
import { StyleBox } from './style'
import { TextField, Button } from '@mui/material'

const Add_books = () => { 

  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  console.log('formData', formData);
  
  



  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log('name', name, 'value', value);
    setFormData((preData) => ({
      ...preData,
      [name]: value
    }))
  } 

const handleSubmit = async (event) => {
  event.preventDefault();
 
 await axios.post('http://localhost:8000/save-book-data', formData).then((res) =>{
  if(res) {
    navigate('/view_book');
  }
 }).catch(error => {
  console.log('error', error);
 })

}


  return (
    <div>
      <Nav />
      <StyleBox>
        <h1> Add_books</h1>
        <form onSubmit={handleSubmit}>
          <TextField sx={{ width: '80%', margin: '10px'}} label='Book_id' name='Book_id' onChange={handleChange} variant='outlined' />
          <TextField sx={{ width: '80%', margin: '10px'}} label='Book_Name' name='Book_Name' onChange={handleChange} variant='outlined' type='text'/>
          <TextField sx={{ width: '80%', margin: '10px'}} label='Book_Discription' name='Book_Discription' onChange={handleChange} variant='outlined' type='text'/>
          <TextField sx={{ width: '80%', margin: '10px'}} label='Author Name' name='Author_Name' onChange={handleChange} variant='outlined' type='text'/>
          <TextField sx={{ width: '80%', margin: '10px'}} label='Cover_image' name='Cover_image' onChange={handleChange} variant='outlined' type='text'/>
          <div>
          <Button sx={{m: 2}} variant='contained' color="primary" type="submit">Submit</Button>
        
          </div>
        </form>

      </StyleBox>
    </div>
  )
}

export default Add_books