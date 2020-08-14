import React from 'react';
import { useLocalStore } from 'mobx-react';
import { Playground } from './src/scenes';
import { createStore, storeContext } from './src/stores';
import 'mobx-react-lite/batchingForReactNative'

export default function App() {
  const store = useLocalStore(createStore);

  return (
    <storeContext.Provider value={store}>
      <Playground />
    </storeContext.Provider>
  );
}
