import React from "react";
import propTypes from 'prop-types';
import Item from "../item";
import Total from '../total';
import './styles.css';

function List({items, onSelectItem, onAddDelItem, cart}){
  console.log('List');
  return (
    <div className='List'>{items.map(item =>
      <div className='List__item' key={item.vendorCode}>
        <Item item={item} onSelect={onSelectItem} onAddDel={onAddDelItem} />
      </div>
    )}
      {cart ? <Total items={items} /> : null}
    </div>
  )
}

List.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  onSelectItem: propTypes.func,
  onAddDelItem: propTypes.func
}

List.defaultProps = {
  items: [],
  onAddDelItem: () => {},
  onSelectItem: () => {},
  cart: false,
}

export default React.memo(List);