import React from 'react';
import { NativeBaseProvider, Box, Text, Center } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return <Box bg={{
    linearGradient: {
      colors: ['lightBlue.300', 'violet.800'],
      start: [0, 0],
      end: [1, 0]
    }
  }} p="12" rounded="xl" _text={{
    fontSize: 'md',
    fontWeight: 'medium',
    color: 'warmGray.50',
    textAlign: 'center'
  }}>
      This is a Box with Linear Gradient m nnkl
      This is a Box with Linear Gradient m nnkl
    </Box>;
};

const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

function Example() {
  return <NativeBaseProvider config={config}>
      <Center flex={1} px="3">
        <App />
      </Center>
    </NativeBaseProvider>;
}

export default Example