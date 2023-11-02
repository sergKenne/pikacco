import React from 'react'
import { useNavigate } from 'react-router-dom';


const Card = ({id, title, desc}) => {
    const navigate = useNavigate()
  return (
      <div className="card">
          <div className="card__body">
              <div className="card__number">{id}</div>
              <h2 className="card__title">{title}</h2>
              <p className="card__desc">{desc}</p>
              <button className="card__btn" onClick={()=>navigate(`/post/${id}`)}>view</button>
          </div>
      </div>
  );
}

export default Card