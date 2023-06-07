import React from 'react';


function CardItem(props) {
  return (
    <>
      <li className='cards1__item'>
        <div className='cards1__item__link' to={props.path}>
          <figure className='cards1__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt='img'
              className='cards1__item__img'/>
          </figure>
          <div className='cards1__item__info'>
            <h5 className='cards1__item__text'>{props.text}</h5> 
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
