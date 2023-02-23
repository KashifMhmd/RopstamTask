/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {makeServer} from './Server';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MainNavigator from './src/Routes/MainNavigator';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const {persistor, store} = configureStore();
  if (process.env.NODE_ENV === 'development') {
    makeServer({environment: 'development'});
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView
          style={{
            flex: 1,
          }}>
          <MainNavigator />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
