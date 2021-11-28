import React from "react";
import './styles.css';

function CartLayout({head, content, children, onSwitch}){
  console.log('CartLayout');
  return (
    <div className='CartLayout'>
      <div className='CartLayout__head'>
        {head}
        <button onClick={onSwitch}>Закрыть</button>
      </div>
      <div className='CartLayout__center'>
        {content || children}
      </div>
    </div>
  )
}

export default React.memo(CartLayout);