import React from 'react'
import { NavLink } from "react-router-dom";

const CreatePost = () => {
  return (
    <div className='create-post'>
        <NavLink className='btn-create-post' to={'/posts/new'}>Создать пост</NavLink>
    </div>
  )
}

export default CreatePost
