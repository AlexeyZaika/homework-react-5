import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <div className="product__item item-product">
      <Link to={`/electronics/laptops/${props.mark}/${props.id}`} className="item-product__image"><img src={props.url} alt="" /></Link>
      <Link to={`/electronics/laptops/${props.mark}/${props.id}`} className="item-product__title">{props.title}</Link>
      <p className="item-product__text">{props.description}</p>
      <div className="item-product__price">
        <span>{props.price}</span> <span>{'\u20B4'}</span>
      </div>
    </div>
  )
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  mark: PropTypes.string.isRequired
}

export default CardItem;

