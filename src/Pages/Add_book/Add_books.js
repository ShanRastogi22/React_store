import React from 'react'
import Nav from '../../component/Nav'
import { StyleBox } from './style'
import { TextField, Button } from '@mui/material'

const Add_books = () => {
  return (
    <div>
      <Nav />
      <StyleBox>
        <h1> Add_books</h1>
        <form>
          <TextField sx={{ width: '80%', margin: '10px'}} label='Book_id' name='Book_id' variant='outlined' />
          <TextField sx={{ width: '80%', margin: '10px'}} label='Book_Name' name='Book_Name' variant='outlined' type='text'/>
          <TextField sx={{ width: '80%', margin: '10px'}} label='Book_Discription' name='Book_Discription' variant='outlined' type='text'/>
          <TextField sx={{ width: '80%', margin: '10px'}} label='Author Name' name='Author Name' variant='outlined' type='text'/>
          <TextField sx={{ width: '80%', margin: '10px'}} label='Cover_image' name='Cover_image' variant='outlined' type='text'/>
          <div>
          <Button sx={{m: 2}} variant='contained' color="primary">Submit</Button>
          <Button sx={{m: 2}} variant='contained' color="success">Reset</Button>
          </div>
        </form>

      </StyleBox>
    </div>
  )
}

export default Add_books
