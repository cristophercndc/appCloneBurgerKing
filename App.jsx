

import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'
import 'react-native-gesture-handler'
;
const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>


  );
};


export default App;
