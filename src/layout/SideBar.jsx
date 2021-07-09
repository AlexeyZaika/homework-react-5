import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import cardData from '../component/electronics/cardData.json'

function SideBar() {
  const [marks, setMarks] = React.useState([]);

  React.useEffect(() => {
    let arr = [];

    cardData.map(item => {
      if (!arr.includes(item.mark)) {
        arr.push(item.mark);
      }
    })

    setMarks(arr);
  }, []);

  return (
    <nav className="sideBar">
      <ul className="sideBar__list">
        <li>
          <Link to="/electronics/laptops" className="sideBar__link">Ноутбуки</Link>
          <ul className="sideBar__subMenu">
            {
              marks.map( (item, index) => <li key={index}><Link to={`/electronics/laptops/${item}`}>{item}</Link></li>)
            }
          </ul>
        </li>
        <li><Link to="/electronics/phone" className="sideBar__link">Мобильные телефоны</Link></li>
        <li><Link to="/electronics/tablet" className="sideBar__link">Планшеты</Link></li>
        <li><Link to="/electronics/computer" className="sideBar__link">Компьютеры</Link></li>
      </ul>
    </nav>
  )
}

export default SideBar;

