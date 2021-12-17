import React, { useCallback, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Layout from "../layout";
import BasketSimple from "../../components/basket-simple";
import useStore from "../../utils/use-store";
import ProductDetails from '../product-details';
import useSelector from "../../utils/use-selector";

const Product = () => {

  const { id } = useParams();

  const select = useSelector(state => ({
    product: state.product.productDetails,
    amount: state.basket.amount,
    sum: state.basket.sum
  }));

  const store = useStore();

  const callbacks = {
    addToBasket: useCallback((_id) => store.basket.add(_id), [store]),
    openModal: useCallback(() => store.modals.open('basket'), [store]),
    getProductDetails: useCallback((id) => store.product.getProductDetails(id), [store]),
  }

  useEffect(async () => {
    await callbacks.getProductDetails(id);
  }, []);

  return(
    <Layout head={<h1>{select.product.title}</h1>}>
      <BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum}/>
      <ProductDetails product={select.product} onAdd={callbacks.addToBasket} />
    </Layout>
  )
}

export default Product;
