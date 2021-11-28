import React from "react";
import propTypes from 'prop-types';
import Item from "../item";
import Total from '../total';
import './styles.css';

function List({items, onSelectItem, onAddItem}){
  console.log('List');
  return (
    <div className='List'>{items.map(item =>
      <div className='List__item' key={item.vendorCode}>
        <Item item={item} onSelect={onSelectItem} onAdd={onAddItem} />
      </div>
    )}
      {items[0].count ? <Total items={items} /> : null}
    </div>
  )
}

List.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  onSelectItem: propTypes.func,
  onAddItem: propTypes.func
}

List.defaultProps = {
  items: [],
  onAddItem: () => {},
  onSelectItem: () => {}
}

export default React.memo(List);