import React from "react";
import propTypes from 'prop-types';
import plural from 'plural-ru';
import { sumCart, countCart } from "../utils/calculationCart";
import './styles.css';

function Controls({onSwitch, cart}){
  console.log('Controls');
  
  const sum = sumCart(cart);
  const count = countCart(cart);

  return(
    <div className='Controls'>
      <div className='Controls__head'>В корзине:</div>
      <div className='Controls__total'>
        {count ? `${count} ${plural(count, 'товар', 'товара', 'товаров')} / ${sum} ₽` : 'Пусто'}
      </div>
      <button onClick={onSwitch} className='Controls__button'>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onSwitch: propTypes.func.isRequired
}

Controls.defaultProps = {
  onSwitch: () => {},
  cart: []
}

export default React.memo(Controls);