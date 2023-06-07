import React from 'react';


function CardItemm(props) {
  return (
    <>
      <li className='cardss__item'>
        <div className='cardss__item__link' to={props.path}>
          <figure className='cardss__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt='img'
              className='cardss__item__img'/>
          </figure>
          <div className='cardss__item__info'>
            <h5 className='cardss__item__text'>{props.text}</h5> 
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItemm;
