import React from "react";
import propTypes from 'prop-types';
import './styles.css';

function Controls({onSwitch}){
  console.log('Controls');
  return(
    <div className='Controls'>
      <div className='Controls__head'>В корзине:</div>
      {/* TODO отображение ПУСТО если в корзине пусто, либо количество товаров с purl для склонения товар/товара и сумму через слэш */}
      <button onClick={onSwitch}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onSwitch: propTypes.func.isRequired
}

Controls.defaultProps = {
  onSwitch: () => {}
}

export default React.memo(Controls);