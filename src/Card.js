import React from 'react';
import "./card.css"

function Card({photo}) {
    console.log(photo);
  return <div className='card'>
      <img src={photo.urls.regular} alt="" className='img' />
  </div>;
}

export default Card;
