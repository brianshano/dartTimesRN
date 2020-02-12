/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {mapping, dark as darkTheme} from '@eva-design/eva';
import {default as appTheme} from './src/style/dart-theme.json'; // <-- Import app theme

import HomeScreen from './screens/HomeScreen';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  // Text,
  StatusBar,
} from 'react-native';

const theme = {...darkTheme, ...appTheme};

const App = () => {
  StatusBar.setBarStyle('light-content', true);
  return (
    <ApplicationProvider mapping={mapping} theme={theme}>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </ApplicationProvider>
  );
};

export default App;
