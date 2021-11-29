const sumCart = (cart) => {
  return cart.reduce((accum, curr) => (accum + (curr.price * curr.count)), 0);
};

const countCart = (cart) => {
  return cart.reduce((accum, curr) => (accum + curr.count), 0);
};

export { sumCart, countCart };