import { useState } from "react";
import {Icon, useToast, KeyboardAvoidingView, CheckIcon, FormControl, Stack, Center, Text, Box, Input,Button, Pressable } from "native-base"
import { MaterialCommunityIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';



export default function Login () {
    const [formData, setData] = useState({});
    const [errors, setErrors] = useState({});
    const toast = useToast();
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(false);

    const doLogin = () => {
        setLoading(true);
        if(!formData.email && !formData.password){
            toast.show({
                duration : 1000,
                render: () => {
                    return <Box bg="rose.300" px="5"  py="5" rounded="md" _text={{ color : "muted.50" }} mb={5}>
                            Inputs can't be empty
                        </Box>;
                }
            });
            setLoading(false);
        } else if(formData.email != "nobledsmarts@gmail.com"){
            toast.show({
                duration : 1000,
                render: () => {
                    return <Box bg="rose.300" px="5"  py="5" rounded="md" _text={{ color : "muted.50" }} color="muted.50" mb={5}>
                            Invalid Login
                        </Box>;
                }
            });
            setLoading(false);
        } else {
            navigation.push('Index');
             setLoading(false);
        }
        
    }

    return (
        <KeyboardAvoidingView bg="#e50" h={{
            base: "100%",
            lg: "auto"
        }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Box display="flex" h="100%"  bg="#fff" alignItems="center">
            <Stack  direction="column" mt={9} space={4} w="100%"  height="10%">
                <Box p={5} justifyContent="space-between" display="flex" flexDirection="row" bg="#fff">
                    <Text>Log In</Text>
                    
                    <Text>Sign Up</Text>
                </Box>
            </Stack>
            <Stack direction="column" mt={3} space={4} w="75%" maxW="300px" height="60%">
                <Box alignItems="center" py={4}>
                    <Box display="flex" alignItems="center" py={4}>
                        <Icon size="5xl" as={Entypo} name="user" color="coolGray.400" _dark={{
                            color: "warmGray.50"
                        }} />
                    </Box>
                    <Text color="coolGray.700" fontSize="xl" bold>Enter your details to log in</Text>
                </Box>
                <FormControl isRequired>
                    <FormControl.Label _text={{
                        bold: true
                    }}>
                    Email
                    </FormControl.Label>
                    <Input _focus={{
                        backgroundColor : "#f9f9f9",
                        borderColor : "#5c77ef"
                    }} placeholder="Email Address" onChangeText={value => setData({ ...formData,
                        email: value
                    })} />
                    
                    
                </FormControl>
                                <FormControl isRequired>
                    <FormControl.Label _text={{
                        bold: true
                    }}>
                    Password
                    </FormControl.Label>
                    <Input type="password" _focus={{
                        backgroundColor : "#f9f9f9",
                        borderColor : "#5c77ef"}} placeholder="Password" onChangeText={value => setData({ ...formData,
                        password: value
                    })} />
                    
                </FormControl>
                {/* <Button isLoading isLoadingText="Submitting">
                    Button
                </Button> */}
            </Stack>
            <Stack direction="column" height="30%" space={4} w="75%">
                <Button rounded={50} w="100%" textAlign="center" __text={{ margin : 'auto', color : '#e50' }}  size="lg"  isLoading={isLoading} isLoadingText="Submitting" onPress={ () => doLogin()}>
                    Log In
                </Button>
                <Button rounded={50} bold variant="outline" w="100%" textAlign="center" _text={{ margin : 'auto', colo : '#fff' }}  size="lg"  isLoading={false} isLoadingText="Submitting" varian="subtle" color="primary">
                    Forgot password
                </Button>
            </Stack>
       </Box>
       </KeyboardAvoidingView>
    )
}