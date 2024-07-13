import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const NewPost = () => {
  const [input, setInput] = useState({
    text: "",
  })

  const { text } = input;
  console.log(text)

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput((prevForm) => ({
      ...prevForm, [name]: value
      })
    )
  }

  const hendleOnClick = async() => {
    await fetch('http://localhost:7071/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
      body: JSON.stringify({"id": 0, "content": text}),
    });
  }

  return (
    <div className='new-card'>
        <div className='navigate'>
            <a href="#" className='chapter'>Публикация</a>
            <a href="#" className='chapter'>Фото/виедо</a>
            <a href="#" className='chapter'>Прямой эфир</a>
            <a href="#" className='chapter'>...Ещё</a>
            <NavLink className='close' to={'/'}>Х</NavLink>
        </div>
        <div className='underline'></div>
        <div className='new-post-field'>
            <div className='circle'></div>
            <textarea className='input-text' name="text" onChange={handleOnChange} value={text}></textarea>

        </div>
        <div className='underline'></div>
        <div className='publication'>
            <NavLink className='btn-create-post' to={'/'} onClick={hendleOnClick}>Опубликовать</NavLink>
        </div>
    </div>
  )
}

export default NewPost
