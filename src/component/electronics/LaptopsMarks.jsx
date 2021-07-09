import React from 'react';
import { useParams } from 'react-router';
import './style.scss';
import cardData from './cardData.json';
import CardItem from './CardItem';
import SideBar from '../../layout/SideBar';

export default function LaptopsMarks() {
  const [products, setProducts] = React.useState([]);
  const params = useParams();

  React.useEffect(() => {
    let arr = [];

    cardData.map(item => {
      if (params.mark === item.mark) {
        arr.push(item);
      }
    })

    setProducts(arr);
  }, [params]);

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
