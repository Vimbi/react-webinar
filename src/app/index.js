import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Main from "./main";
import Basket from "./basket";
import useSelector from "../utils/use-selector";
import Product from '../components/product';

/**
 * Приложение
 */
function App() {

  const select = useSelector(state => ({
    name: state.modals.name
  }));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      {select.name === 'basket' && <Basket/>}
    </Router>
  );
}

export default React.memo(App);
