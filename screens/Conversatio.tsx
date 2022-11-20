import React, { Suspense, useEffect } from 'react';
import { View, Text } from 'native-base'
import { StatusBar  } from 'expo-status-bar';
import LoadingScreen from './LoadingScreen.js';



const LazyContent = React.lazy(() => { 
  return new Promise(resolve => setTimeout(resolve, 5 * 1000))
    .then(() => import('./Conversations/index.js') )
});


export default function Conversati() {
  
  return (
    <>
    <Suspense fallback={<LoadingScreen />}>
     <LazyContent />
     
    </Suspense>
    <StatusBar style="light" backgroundColor='#fff'/>
    </>
  );
}