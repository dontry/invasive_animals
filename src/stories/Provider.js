import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from '../stores/mockStore'

let store = configureStore();

/* eslint-disable-next-line */
export default function Provider({story}) {
  return (
    <ReduxProvider store={store}>
        {story}
    </ReduxProvider>
  );
}