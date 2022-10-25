import { Box, Pressable, HStack, Avatar, VStack, Text } from "native-base";
import { SwipeRow } from "react-native-swipe-list-view";
import DeleteRow from "../Actions/DeleteRow";
import RenderHiddenItem from "./RenderHiddenItem";

const toHsl = (str, s, l ) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let h = hash % 360;
  return 'hsl('+h+', '+s+'%, '+l+'%)';
}

export default ({data, index, conversationModel}) => { 

  return (
    <Pressable  android_ripple={{ color: '#00000009' }} bg="#fff" width="100%" h="70px" borderColor="muted.300" px={4}>
        <Box  h="100%" py="2">
          <HStack h="100%"   alignItems="center" justifyContent="center" >
            <Box flexBasis="20%" h="100%"  alignItems="center" justifyContent="center">
            <Box justifyContent="center" alignItems="center" rounded="full" size="50px" bg={toHsl(data.user.username, '50', '50')} style={{ background : toHsl(data.user.username, '80%', '60%') }}>
              <Text textTransform="uppercase" fontSize="20px" fontWeight={600} color="muted.50"> {data.user.username[0] }{data.user.username[1] } </Text>
            </Box>
            {/* <Avatar size="50px" source={{
              uri: data.avatarUrl
            }} /> */}
            </Box>
            <VStack  h="100%" justifyContent="center"  flexBasis="65%" space={1}>
              <Text color="info.600" fontSize="16px" fontWeight="300" _dark={{
              color: 'warmGray.50'
            }} bold>
                {data.user.username}
              </Text>
              <Text color="coolGray.500" fontSize="15px" fontWeight="400" _dark={{
              color: 'warmGray.200'
            }}>
                {data.body}
              </Text>
            </VStack>
            <VStack  h="100%" flexBasis="15%" justifyContent="center" alignItems="center" space={2}>
              <Text color="info.600" fontSize="10px" fontWeight="500" _dark={{
              color: 'warmGray.50'
            }} bold>
                17:05
              </Text>
              <Box alignItems="center" justifyContent="center" rounded="full" bg="info.600" color="coolGray.600" w="24px" h="24px" fontWeight="500" _dark={{
              color: 'warmGray.200'
            }}>
                <Text color="info.100" fontSize="14px" fontWeight="300" _dark={{
                color: 'warmGray.50'
              }} >
                  1
                </Text>
              
              </Box>
            </VStack>
            {/* <Spacer bg="yellow.600"/> */}
            {/* <Text fontSize="xs" color="coolGray.800" _dark={{
            color: 'warmGray.50'
          }} alignSelf="flex-start">
              {data.timeStamp}
            </Text> */}
          </HStack>
        </Box>
    </Pressable>
  )
}


          