import React from 'react';
import { Provider } from "react-redux";
import { store } from '../../redux/store';
import ListPage from '../list-page/list-page';

const App = (): JSX.Element => {

  return (
    <Provider store={store}>
      <ListPage />
    </Provider>
  );
}

export default App;