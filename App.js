import React from 'react';
import { Provider } from 'react-redux'

import store from './src/store';

import SearchScreenNavigator from './src/navigation/SearchNavigation';

export default App = () => {

  return(
    <Provider store={store}>
      <SearchScreenNavigator />
    </Provider>
  )
}