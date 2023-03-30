import axios from 'axios'
import React, {useEffect, useState} from 'react'
import BookCard from '../../component/BookCard'
import Nav from '../../component/Nav'
const View_books = () => {

  const [ data, setData ] = useState([]);
  console.log(data)
 
  const viewAllBooks = async () => {
    await axios.get('http://localhost:8000/save-book-data').then((res) => {
      if(res) {
        setData(res.data);
      }
    })
  }

useEffect(() => {
  viewAllBooks();
},[])
  return (
    <div>
      <Nav />
     <BookCard />
    </div>
  )
}

export default View_books
