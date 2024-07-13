import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from "react-router-dom";

const EditCard = () => {
  const { id } = useParams();
  console.log(id);

  const [ card, setCard ] = useState({
    id: id,
    content: ''
  })
  console.log(card);

  useEffect(() => {
    fetch(`http://localhost:7071/posts/${id}`)
    .then((response) => response.json())
    .then((card) => setCard(card.post));
  }, [id]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCard((prevForm) => ({
      ...prevForm, [name]: value
      })
    )
  }

  const handleOnClick = async () => {
    await fetch(`http://localhost:7071/posts/${card.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
      body: JSON.stringify({"id": card.id, "content": card.content}),
    })
  }


  return (
    <div className='edit'>
        <div className='edit-field'>
            <h4>Редактировать публикацию</h4>
            <NavLink className='close' to={`/posts/${card.id}`}>Х</NavLink>
        </div>
        <div className='edit-header'>
            <img src="src/png/png_524540.png" className='avatar-main' alt="avatar"/>
            <textarea name="content" className='text-header' value={card.content} onChange={handleOnChange}></textarea>
        </div>
        <div className='underline'></div>
        <div className='edit-navigate'>
            <button className='edit-bnt'>Фото/видео</button>
            <button className='edit-bnt'>Чувствa/действия</button>
            <button className='edit-bnt'>GIF</button>
            <button className='edit-bnt'>Отметить друзей</button>
            <button className='edit-bnt'>Отметить посещение</button>
        </div>
        <div className='edit-field'>
        <NavLink className='btn-create-post' to={`/posts/${card.id}`} onClick={handleOnClick}>Опубликовать</NavLink>
        </div>
    </div>
  )
}

export default EditCard
