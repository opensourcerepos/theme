import React from 'react';
import style from './card.module.css';

const Card = (props) => {
  return <div className={style.card} >
    {props.children}
  </div>
}

export default Card;