import React from "react";
import './styles.css';

function Total({items}) {
  const sum = items.reduce((accum, curr) => {
    return accum + (curr.price * curr.count)
  }, 0);

  const count = items.reduce((accum, curr) => {
    return accum + curr.count
  }, 0);

  return (
    <div className='Total'>
      <div className='Total__head'>Итого</div>
      <div className='Total__sum'>{`${sum} ₽`}</div>
      <div className='Total__count'>{`${count} шт`}</div>
    </div>
  )
}

export default React.memo(Total);