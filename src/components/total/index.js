import React from "react";
import { sumCart, countCart } from "../utils/calculation-cart";
import './styles.css';

function Total({items}) {

  const sum = sumCart(items);
  const count = countCart(items);

  return (
    <div className='Total'>
      <div className='Total__head'>Итого</div>
      <div className='Total__sum'>{`${sum} ₽`}</div>
      <div className='Total__count'>{`${count} шт`}</div>
    </div>
  )
}

export default React.memo(Total);