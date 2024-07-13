import React from 'react'
import { Route, Routes } from "react-router-dom";
import NewPost from './NewPost'
import CardDetails from './CartDetails';
import EditCard from './EditCard';
import Cards from './Cards';

const Main = () => {
  // const url = {
  //   getPosts: 'http://localhost:7071/posts'
  // }

  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/posts/new' element={<NewPost/>}/>
        <Route path='/posts/:id' element={<CardDetails/>}/>
        <Route path='/posts/:id/edit' element={<EditCard/>}/>
      </Routes>
    </div>
  )
}

export default Main
