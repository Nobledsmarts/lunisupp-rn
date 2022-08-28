import { Image, Center, Heading, Text, Stack, Box, TextInput, Button } from "native-base"
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import logo from '../assets/lunisupp.png';
import symbol from '../assets/logo-symbol.png';
import welcomelogo from '../assets/customer1.png';
import { StatusBar  } from 'expo-status-bar';


export default function Welcome() {
    const navigation = useNavigation();
    return (
        <Box height="100%" display="flex" alignItems="center" justifyContent="center">
            <Stack  direction="column"  height="100%"  width="100%" bg="#f9f9f9" space={4} alignItems="center">
                <Stack w="100%" direction="row" space={4} flexBasis="25%" p={5} alignItems="center" justifyContent="center">
                    <Image source={symbol} style={{ width: 50, height: 50}} alt="logo" />
                    <Heading color="primary.600" fontWeight="extrabold" size="2xl"  _dark={{
                        color: "coolgray.800"
                    }}>
                        Lunisupp
                    </Heading>
                </Stack>

                <Stack flexBasis="50%" alignItems="center"  w="100%">
                        <Image source={welcomelogo} style={{ width: 200, height: 250}} alt="logo" />
                        <Text color="secondary.400" textAlign="center" fontWeight="medium" fontSize="3xl" _text={{ textAlign: 'center' }}>Engage</Text> 
                        <Text fontWeight="medium" fontSize="2xl">with your website visitors</Text> 
                </Stack>
                <Stack direction="column" flexBasis="25%" space={4}>
                    <Button rounded={50} px={100} __text={{ margin : 'auto', color : '#e50' }}  size="lg"  isLoading={false} isLoadingText="Submitting" onPress={ () => navigation.push('login')}>
                        Log In
                    </Button>
                    <Button rounded={50} bold variant="outline" px={100} _text={{ margin : 'auto', colo : '#fff' }}  size="lg"  isLoading={false} isLoadingText="Submitting" varian="subtle" color="primary">
                        Create an account
                    </Button>
                </Stack>
            </Stack>
            <StatusBar backgroundColor="#0a1e75" style="light" />
        </Box>
    )
}