import React from 'react';
import Home from "./components/home";
import Cart from './components/cart';

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({store}) {
  console.log('App');

  return (
    <>
      <Home store={store}/>
      {store.getState().isCartVisible && <Cart store={store}/>}
    </>
  );
}

export default App;