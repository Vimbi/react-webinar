import React, {useCallback} from 'react';
import Controls from "../controls";
import List from "../list";
import Layout from "../layout";

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function Home({store}) {
  console.log('Home');
  console.log('store', store);
  const callbacks = {
    onSwitchCart: useCallback(() => store.switchCart(), [store]),
    onSelectItem: useCallback((code) => store.selectItem(code), [store]),
    onAddItem: useCallback((vendorCode) => store.addItem(vendorCode), [store])
  }

  return (
    <>
      <Layout head={<h1>Магазин</h1>}>
        <Controls onSwitch={callbacks.onSwitchCart} cart={store.getState().cart}/>
        <List items={store.getState().items}
              onSelectItem={callbacks.onSelectItem}
              onAddDelItem={callbacks.onAddItem}/>
      </Layout>
    </>
  );
}

export default Home;