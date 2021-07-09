import React from 'react';
import { useParams, useHistory } from 'react-router';
import cardData from './cardData.json';

function CardPage() {
  const params = useParams();
  const history = useHistory();
  const [products, setProducts] = React.useState({});

  const onGoBackHandler = () => {
    history.goBack();
  }

  React.useEffect(() => {
    setProducts(cardData[params.id - 1]);
  }, []);

  return (
    <div className="productPage">
      <div className="container">
        <div className="productPage__body">
          <div className="productPage__image">
            <img src={products.image} alt="" />
          </div>
          <div className="productPage__content">
            <h2 className="productPage__title">{products.name}</h2>
            <p className="productPage__text">{products.description}</p>
            <div className="productPage__cost"><span>{products.price}</span> <span>{'\u20B4'}</span></div>
          </div>
        </div>
        <button className="productPage__button" type="button" onClick={onGoBackHandler}>Назад в каталог</button>
      </div>
    </div>
  )
}

export default CardPage

