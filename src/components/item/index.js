import React, {useCallback, useState} from "react";
import propTypes from 'prop-types';
import './styles.css';

function Item({item, onSelect, onAdd}){
  console.log('Item', item.title);

  const [counter, setCounter] = useState(0);

  // const callbacks = {
  //   onClick: useCallback(() => {
  //     // onSelect(item.code);
  //     // if (!item.selected){
  //       setCounter(counter + 1);
  //     // }
  //   }, [item, onSelect, counter, setCounter])
  // };

  return (
    <div className={'Item'  + (item.selected ? ' Item_selected' : '')}>
      <div className='Item__number'>{item.code}</div>
      <div className='Item__title'>
        {item.title}
      </div>
      <div className='Item__price'>{`${item.price} ₽`}</div>
      {item.count ? null :
        <div className='Item__actions'>
          <button onClick={() => onAdd(item.vendorCode)}>
            Добавить
          </button>
        </div>}
      {item.count ? <div className='Item__count'>{`${item.count} шт`}</div> : null}
    </div>
  )
}

Item.propTypes = {
  item: propTypes.object.isRequired,
  onSelect: propTypes.func.isRequired,
  onAdd: propTypes.func.isRequired
}

Item.defaultProps = {
  onSelect: () => {},
  onAdd: () => {}
}

export default React.memo(Item);