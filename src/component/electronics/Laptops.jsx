import React from 'react';
import './style.scss';
import cardData from './cardData.json';
import CardItem from './CardItem';
import SideBar from '../../layout/SideBar';

export default function Laptops() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    setProducts(cardData);
  }, []);

  return (
    <div className="container">
      <div className="main">
        <SideBar />
        <div className="category">
          {
            products.map(item => <CardItem 
              key={item.id} 
              id={item.id}
              type={item.type}
              mark={item.mark}
              title={item.name} 
              description={item.description}
              price={item.price}
              url={item.image} />)
          }
        </div>
      </div>
    </div>
  )
}
