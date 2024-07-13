import { NavLink } from "react-router-dom";

const Card = (props) => {
  const { item } = props

  return (
    <>
      <NavLink to={`/posts/${item.id}`}>
        <div className='card'>
          <div className='header'>
              <img src="src/png/png_524540.png" className='avatar-main' alt="avatar"/>
              <div className='about'>
                  <h3>Ilnaz Gilyazov</h3>
                  <p>Основатель группы</p>
              </div>
          </div>
          <h2>{item.content}</h2>
          <div className='underline'></div>
          <div className='assessment'>
              <button className='btn-like'>Нравится</button>
              <button className='btn-like'>Комментировать</button>
          </div>
          <div className='footer'>
              <img src="src/png/png_524540.png" className='avatar-main' alt="avatar"/>
              <div className='input-footer'>
                  <input type="text" className = 'input' placeholder='Напишите комментарий...'/>
                  <img className='input-img' src="src/png/happy_3688021.png" alt="" />
                  <img className='input-img' src="src/png/camera_4043492.png" alt="" />
                  <img className='input-img' src="src/png/png_524540.png" alt="" />
                  <img className='input-img' src="src/png/happy_3688021.png" alt="" />
              </div>
          </div>
        </div>
      </NavLink>
    </>

  )
}

export default Card
