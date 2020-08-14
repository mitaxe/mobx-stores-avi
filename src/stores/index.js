import { createContext, useContext } from 'react';
import User from './user';
import App from './app';

export function createStore() {
  const user = new User();
  const app = new App();

  return {
    user,
    app
  };
}

export const storeContext = createContext(null);

export function useStore() {
  const store = useContext(storeContext);
  if (!store) {
    throw Error('Something went wrong with the MobX store.');
  }

  return store;
}
