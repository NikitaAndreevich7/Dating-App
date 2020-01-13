import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { MainScreen } from './src/screen/MainScreen'
import { DatingAppServiceProvider } from './src/components/context/datingAppContextApp'
import  ErrorBoundry  from './src/components/Error/ErrorBoundry'
import DatingService  from './src/service/datingService';

import store from './src/store';

export default function App() {

  const datingService = new DatingService();

  return (
    <Provider store={store}>
        <ErrorBoundry>
          <DatingAppServiceProvider value={datingService}>
            <MainScreen />
          </DatingAppServiceProvider>
        </ErrorBoundry>
    </Provider>
  );
}


