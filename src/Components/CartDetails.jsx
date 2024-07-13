import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from "react-router-dom";

const CardDetails = () => {
    const [ card, setCard ] = useState({
      id: '',
      content: ''
    })
    const { id } = useParams();

    useEffect(() => {
      fetch(`http://localhost:7071/posts/${id}`)
      .then((response) => response.json())
      .then((card) => setCard(card.post));
    }, []);

    const handleClick = async() => {
      await fetch(`http://localhost:7071/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
          }
        }
      )}

  return (
    <>
        <div className='card'>
          <div className='header'>
              <img src="src/png/png_524540.png" className='avatar-main' alt="avatar"/>
              <div className='about'>
                  <h3>Ilnaz Gilyazov</h3>
                  <p>Основатель группы</p>
              </div>
          </div>
          <h2>{card.content}</h2>
          <div className='underline'></div>
          <div className='assessment'>
              <button className='btn-like'>Нравится</button>
              <button className='btn-like'>Комментировать</button>
          </div>
          <div className='publication'>
            <NavLink className='btn-create-post' to={`/posts/${id}/edit`}>Изменить</NavLink>
            <NavLink className='btn-delete-post' to={'/'} onClick={handleClick}>Удалить</NavLink>
          </div>
        </div>
    </>

  )
}

export default CardDetails
