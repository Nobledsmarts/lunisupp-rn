import React, { useCallback, useEffect, useState } from 'react';
// import { Text, View, Image } from 'react-native';
import {NativeBaseProvider, HStack, Box, Image, Text} from 'native-base';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import logo from '../assets/lunisupp.png';
import { StatusBar  } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function Splash() {
  const [appIsReady, setAppIsReady] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 10000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
      navigation.replace('Index');
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NativeBaseProvider>
        <Box alignItems="center" justifyContent="space-between" bg="#0a1d70" h={100} _text={{ color : "#fff" }}
        style={{ flex: 1, color : '#fff' }}
        onLayout={onLayoutRootView}>
            <Box style={{ backgroundColor : '#06155485', flexBasis : '40%', width : '100%', borderBottomLeftRadius : 0, borderBottomRightRadius : 300,  zIndex : -1, borderRightWidth : 1, borderBottomWidth : 1, borderColor : '#0c2076', }}>
            
            </Box>
            <Box borderColor="#050" style={{ width : '100%', borderBottomLeftRadius : 0, borderBottomRightRadius : 0,  display : 'flex', alignItems : 'center', zIndex : 5, borderRightWidth : 0, borderBottomWidth : 0 }}>
                <Image source={logo} style={{ width: 305, height: 159}} alt="logo" /> 
            </Box>
            <Box borderColor="" style={{ backgroundColor : '#06155485', flexBasis : '40%', width : '100%', borderTopLeftRadius : 300, borderBottomRightRadius : 0,  zIndex : -1, borderRightWidth : 0, borderBottomWidth : 0, borderColor : '#0c2076', }}>
            
            </Box>
        </Box>
        <StatusBar style="light" />
    </NativeBaseProvider>
  );
}