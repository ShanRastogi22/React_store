import React from 'react'
import Nav from '../../component/Nav'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { StyleBox } from '../Add_book/style'
import { TextField, Button } from '@mui/material'
const EditBook = () => {
  return (
    <div>
        <Nav />
      <StyleBox>
        <h1> Edit_books</h1>
        <form>
          <TextField sx={{ width: '80%', margin: '10px'}} label='Book_id' name='Book_id'  variant='outlined' />
          <TextField sx={{ width: '80%', margin: '10px'}} label='Book_Name' name='Book_Name'  variant='outlined' type='text'/>
          <TextField sx={{ width: '80%', margin: '10px'}} label='Book_Discription' name='Book_Discription' variant='outlined' type='text'/>
          <TextField sx={{ width: '80%', margin: '10px'}} label='Author Name' name='Author_Name'  variant='outlined' type='text'/>
          <TextField sx={{ width: '80%', margin: '10px'}} label='Cover_image' name='Cover_image' variant='outlined' type='text'/>
          <div>
          <Button sx={{m: 2}} variant='contained' color="primary" type="submit">Submit</Button>
        
          </div>
        </form>

      </StyleBox>
    </div>
  )
}

export default EditBook
