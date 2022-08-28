import React from 'react';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import {NativeBaseProvider} from 'native-base'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/splash';
import Login from './screens/login';
import Welcome from './screens/welcome';
import Index from './screens/index';
import store from './store';
import auth from './store/auth';
import theme from './theme'
import Profile from './screens/Profile/Index'



const appStore = configureStore({
  reducer : {
    auth : auth.reducer,
    store : store.reducer
  }
})

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NativeBaseProvider theme={theme()}>
        <Provider store={appStore}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Splashscreen" component={Splash} options={{ headerShown :false }}/>
              <Stack.Screen name="Login" component={Login} options={{ headerShown :false }}/>
              <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown :false }}/>
              <Stack.Screen name="Index" component={Index} options={{ headerShown :false }}/>
              <Stack.Screen name="Profile" component={Profile} options={{ headerShown :true }}/>
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </NativeBaseProvider>
    )
};


export default App