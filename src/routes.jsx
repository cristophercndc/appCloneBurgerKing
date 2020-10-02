import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home/Home'
import Login from './pages/login/Login'

const Stack = createStackNavigator();

const  Routes= () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      </Stack.Navigator>
   
  );
};

export default Routes;