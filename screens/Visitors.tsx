import { View, Text, Icon, Box, Button, Pressable } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { StatusBar  } from 'expo-status-bar';



export default function Visitors() {
  return (
    <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text color="muted.400" fontSize="18px" fontWeight="400">Visitors</Text>
      {/* <FontAwesome5 my={4} name="users-slash" size={50} color="#ccc" />
      <Text my={4} color="muted.500" fontWeight="semibold">No Visitor is online at the moment</Text>
      <Pressable style={{ overflow : 'hidden' }} rounded="full" bg="#e60" my={4}>
        <Button android_ripple={{ color : '#010e4ed1' }} _text={{ fontWeight : "bold" }} colorScheme="blue"  variant="solid" rounded="full">
            Simulate Visitors
          </Button>
      </Pressable>
      <StatusBar style="light" backgroundColor='#f9f9f9'/> */}
    </Box>
  );
}