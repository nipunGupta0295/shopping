
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Components/Login';
import Home from './Components/Home';
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './Components/Cart';
import NavBar from './Components/NavBar';
import { navigationRef } from './Components/RootNavigation'
import { ToastProvider } from 'react-native-toast-notifications'

const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <ToastProvider>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ToastProvider>




  );
};


export default App;
