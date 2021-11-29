import React, {useCallback} from 'react';
import CartLayout from '../cartLayout';
import List from '../list';
import './style.css';

function Cart({store}){
  console.log('Cart');
  const callbacks = {
    onSwitchCart: useCallback(() => store.switchCart(), [store]),
    onSelectItem: useCallback((code) => store.selectItem(code), [store]),
    onDeleteItem: useCallback((code) => store.deleteItem(code), [store])
  }

  return (
    <>
      <div className='Cover' onClick={callbacks.onSwitchCart}></div>
      <CartLayout head={<h1>Корзина</h1>} onSwitch={callbacks.onSwitchCart}>
        <List items={store.getState().cart}
              onSelectItem={callbacks.onSelectItem}
              onDeleteItem={callbacks.onDeleteItem}
              cart={true}/>
      </CartLayout>
    </>

  )
}

export default React.memo(Cart);