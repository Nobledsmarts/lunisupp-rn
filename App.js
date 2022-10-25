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
import { Box } from 'native-base';

import { StatusBar } from 'expo-status-bar';
// import Profile from './screens/Profile/Index'
import ProfileNavigator from './screens/Profile/ProfileNavigator';

import Profile from './screens/Profile/Profile';
import ChangePassword from './screens/Profile/ChangePassword';
import EditProfile from './screens/Profile/EditProfile';
import * as NavigationBar from 'expo-navigation-bar';




const appStore = configureStore({
  reducer : {
    auth : auth.reducer,
    store : store.reducer
  }
})

const Stack = createNativeStackNavigator();

const App = () => {
  NavigationBar.setBackgroundColorAsync("white");
  // NavigationBar.setBorderColorAsync("red");
  NavigationBar.setButtonStyleAsync("dark");
    return (
      <>
      <NativeBaseProvider theme={theme()}>
        <StatusBar bg="fff" barStyle="dark-content" />
        <Box safeAreaTop bg="#fff" />
      
        <Provider store={appStore}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Splashscreen" component={Splash} options={{ headerShown :false }}/>
              <Stack.Screen name="Login" component={Login} options={{ headerShown :false }}/>
              <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown :false }}/>
              <Stack.Screen name="Index" component={Index} options={{ headerShown :false }}/>


              {/* Profile  screens*/}
              <Stack.Group screenOptions={{ presentation: 'card' }}>
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown :true }}/>
                <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown :true }}/>
                <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown :true }}/>

              </Stack.Group>
              {/* <Stack.Screen name="Profile" component={Profile} options={{ headerShown :true }}/> */}
              {/* <Stack.Screen name="Profile" component={ProfileNavigator} options={{ headerShown :true }}/> */}
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </NativeBaseProvider>
      </>
    )
};


export default App