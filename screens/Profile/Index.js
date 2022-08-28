import { Text, Box, Stack, Pressable, Heading, Icon } from "native-base"
import { StatusBar  } from 'expo-status-bar';
import { MaterialCommunityIcons, AntDesign, Entypo } from "@expo/vector-icons";


export default  Profile = () => {
    return (
    <Box bg="#fff" h="100%"> 
        <Stack bg="red.100" p={3}>
            
            <Box h="100px" bg="#f5f5f5" rounded={8}>
                <Stack direction="row" p={5} h="100px">
                    <Box bg="blue.500" flexBasis="20%">
                        <Pressable>
                            <Box justifyContent="center" alignItems="center" w="60px" h="60px" bg="#c1c1f7" overflow="hidden" rounded="full">
                                <Icon size="6xl" as={Entypo} name="user" color="coolGray.400" _dark={{
                            color: "warmGray.50"
                        }} />
                            </Box>
                        </Pressable>
                    </Box>
                    <Box  bg="" flexBasis="60%">
                        <Heading color="muted.600" size="md" fontWeight="semibold">Support</Heading>
                    </Box>
                    <Box bg="gren.500" justifyContent="center" alignItems="flex-end" flexBasis="20%">...</Box>
                </Stack>
            </Box>
        </Stack>
        <StatusBar style="light" backgroundColor='#fff'/>
    </Box>
    )
}