import React from 'react';
import cardData from './cardData.json';
import SideBar from '../../layout/SideBar';
import CardItem from './CardItem';

function Electronics() {
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

export default Electronics;
