import React from 'react';


function CardItemmm(props) {
  return (
    <>
      <li className='cardsss__item'>
        <div className='cardsss__item__link' to={props.path}>
          <figure className='cardsss__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt='img'
              className='cardsss__item__img'/>
          </figure>
          <div className='cardsss__item__info'>
            <h5 className='cardsss__item__text'>{props.text}</h5> 
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItemmm;
