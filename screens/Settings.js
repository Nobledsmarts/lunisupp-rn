import { 
  HStack, Text, Box, Stack, Pressable, Heading, Icon, View, 
  Switch, IconButton, SafeAreaView, FlatList, ScrollView
} from "native-base"
import { StyleSheet } from 'react-native';
import { StatusBar  } from 'expo-status-bar';
import { MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { ListItem } from "../components/ListItem";


export default Settings = () => {  
    return (
      <ScrollView bg="#fff"  showsVerticalScrollIndicator={false}>
         <Box bg="#fff" > 
            <Stack p={4}>

                <Stack mb={5}>
                   <ListItem label="Chat box" iconBg="purple.600" iconType={Ionicons} iconName="chatbubble"  isFirstChild={true}/>
                   <ListItem label="Automations" iconBg="indigo.600" iconType={MaterialCommunityIcons} iconName="robot" />
                   <ListItem label="Shortcuts" iconBg="yellow.500" iconType={MaterialCommunityIcons} iconName="lightning-bolt" />
                   <ListItem label="Tags" iconBg="pink.500" iconType={MaterialCommunityIcons} iconName="tag" />
                   <ListItem label="Connect with Facebook Messenger" iconBg="yellow.400" iconType={MaterialCommunityIcons} iconName="lock" isLastChild={true}/>
                </Stack>

                <Stack mb={5}>
                  <ListItem label="Notifications" iconBg="red.500" iconType={MaterialCommunityIcons} iconName="tag"  isFirstChild={true}/>
                  <ListItem label="Bug Report" iconBg="red.500" iconType={MaterialCommunityIcons} iconName="lock"  isLastChild={true}/>
                </Stack>

                <Stack mb={5}>
                <ListItem label="Help" iconBg="gray.500" iconType={AntDesign} iconName="question"  isFirstChild={true}/>
                <ListItem label="General terms" iconBg="gray.500" iconType={MaterialCommunityIcons} iconName="format-list-text"/>
                <ListItem label="Privacy policy & GDPR" iconBg="gray.500" iconType={MaterialCommunityIcons} iconName="format-list-text" isLastChild={true}/>
                </Stack>
            </Stack>
            {/* <StatusBar style="dark" backgroundColor='#fff'/> */}
          </Box>
      </ScrollView>
    );
}


const tt = () => {
  return <Box bg="#fff" h="100%" > 
  <Stack p={4}>
      <Stack mb={5}>
          <Pressable roundedTopLeft={8} roundedTopRight={8}   borderColor="muted.300" borderBottomWidth="0.5px" mb="0px" h="60px" bg="light.100"  android_ripple={{ color: '#00000009' }}>
              <Stack direction="row" p={3} h="60px" justifyContent="space-between">
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                      <IconButton mr="8px"  borderRadius="full" h="35px" w="35px" bg="purple.600"  variant="solid" _icon={{
                      as: Ionicons,
                      name: "chatbubble"
                      }} />
                      <Text color="muted.800" fontSize="16px" fontWeight="400">Chat box</Text>
                  </Box>
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                  
                  
                  <Icon ml="8px" as={MaterialCommunityIcons}size="lg" name="chevron-right" fontSize="24px" color="muted.400" _dark={{
                          color: "muted.200"
                      }} />
                      
                  </Box>
              </Stack>
          </Pressable>
          <Pressable   borderColor="muted.300" borderBottomWidth="0.5px" mb="0px" h="60px" bg="light.100"  android_ripple={{ color: '#00000009' }}>
              <Stack direction="row" p={3} h="60px" justifyContent="space-between">
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                      <IconButton mr="8px"  borderRadius="full" h="35px" w="35px" colorScheme="indigo"  variant="solid" _icon={{
                      as: MaterialCommunityIcons,
                      name: "robot"
                      }} />
                      <Text color="muted.800" fontSize="16px" fontWeight="400">Automations</Text>
                  </Box>
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                  
                  
                  <Icon ml="8px" as={MaterialCommunityIcons}size="lg" name="chevron-right" fontSize="24px" color="muted.400" _dark={{
                          color: "muted.200"
                      }} />
                      
                  </Box>
              </Stack>
          </Pressable>
          <Pressable   borderColor="muted.300" borderBottomWidth="0.5px" mb="0px" h="60px" bg="light.100"  android_ripple={{ color: '#00000009' }}>
              <Stack direction="row" p={3} h="60px" justifyContent="space-between">
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                      <IconButton mr="8px"  borderRadius="full" h="35px" w="35px" bg="yellow.500"  variant="solid" _icon={{
                      as: MaterialCommunityIcons,
                      name: "lightning-bolt"
                      }} />
                      <Text color="muted.800" fontSize="16px" fontWeight="400">Shortcuts</Text>
                  </Box>
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                  
                  
                  <Icon ml="8px" as={MaterialCommunityIcons}size="lg" name="chevron-right" fontSize="24px" color="muted.400" _dark={{
                          color: "muted.200"
                      }} />
                      
                  </Box>
              </Stack>
          </Pressable>
          <Pressable   borderColor="muted.300" borderBottomWidth="0.5px" mb="0px" h="60px" bg="light.100"  android_ripple={{ color: '#00000009' }}>
              <Stack direction="row" p={3} h="60px" justifyContent="space-between">
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                      <IconButton mr="8px"  borderRadius="full" h="35px" w="35px" bg="pink.500"  variant="solid" _icon={{
                      as: MaterialCommunityIcons,
                      name: "tag"
                      }} />
                      <Text color="muted.800" fontSize="16px" fontWeight="400">Tags</Text>
                  </Box>
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                  
                  
                  <Icon ml="8px" as={MaterialCommunityIcons}size="lg" name="chevron-right" fontSize="24px" color="muted.400" _dark={{
                          color: "muted.200"
                      }} />
                      
                  </Box>
              </Stack>
          </Pressable>

          <Pressable  h="60px" bg="light.100" roundedBottomLeft={8} roundedBottomRight={8} android_ripple={{ color: '#00000009' }}>
              <Stack direction="row" p={3} h="60px" justifyContent="space-between">
              <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                      <IconButton mr="8px" borderRadius="full" h="35px" w="35px" bg="yellow.400"  variant="solid" _icon={{
                      as: MaterialCommunityIcons,
                      name: "lock"
                      }} />
                      
                      <Text color="muted.800" fontSize="16px" fontWeight="400">Connect with Facebook Messenger</Text>
                  </Box>
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                  
                  <Icon ml="8px" as={MaterialCommunityIcons}size="lg" name="chevron-right" fontSize="24px" color="muted.400" _dark={{
                          color: "muted.200"
                      }} />
                      
                  </Box>
              </Stack>
          </Pressable>

          
      </Stack>
      <Stack mb={5}>
        
          <Pressable  roundedTopLeft={8} roundedTopRight={8} borderColor="muted.300" borderBottomWidth="0.5px" mb="0px" h="60px" bg="light.100"  android_ripple={{ color: '#00000009' }}>
              <Stack direction="row" p={3} h="60px" justifyContent="space-between">
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                      <IconButton mr="8px"  borderRadius="full" h="35px" w="35px" bg="red.500"  variant="solid" _icon={{
                      as: MaterialCommunityIcons,
                      name: "tag"
                      }} />
                      <Text color="muted.800" fontSize="16px" fontWeight="400">Notifications</Text>
                  </Box>
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                  
                  
                  <Icon ml="8px" as={MaterialCommunityIcons}size="lg" name="chevron-right" fontSize="24px" color="muted.400" _dark={{
                          color: "muted.200"
                      }} />
                      
                  </Box>
              </Stack>
          </Pressable>

          <Pressable  h="60px" bg="light.100" roundedBottomLeft={8} roundedBottomRight={8} android_ripple={{ color: '#00000009' }}>
              <Stack direction="row" p={3} h="60px" justifyContent="space-between">
              <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                      <IconButton mr="8px" borderRadius="full" h="35px" w="35px" bg="red.400"  variant="solid" _icon={{
                      as: MaterialCommunityIcons,
                      name: "lock"
                      }} />
                      
                      <Text color="muted.800" fontSize="16px" fontWeight="400">Bug Report</Text>
                  </Box>
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                  
                  <Icon ml="8px" as={MaterialCommunityIcons}size="lg" name="chevron-right" fontSize="24px" color="muted.400" _dark={{
                          color: "muted.200"
                      }} />
                      
                  </Box>
              </Stack>
          </Pressable>

          
      </Stack>

      <Stack mb={5}>
          <Pressable roundedTopLeft={8} roundedTopRight={8}   borderColor="muted.300" borderBottomWidth="0.5px" mb="0px" h="60px" bg="light.100"  android_ripple={{ color: '#00000009' }}>
              <Stack direction="row" p={3} h="60px" justifyContent="space-between">
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                      <IconButton mr="8px"  borderRadius="full" h="35px" w="35px" bg="purple.600"  variant="solid" _icon={{
                      as: Ionicons,
                      name: "chatbubble"
                      }} />
                      <Text color="muted.800" fontSize="16px" fontWeight="400">Chat box</Text>
                  </Box>
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                  
                  
                  <Icon ml="8px" as={MaterialCommunityIcons}size="lg" name="chevron-right" fontSize="24px" color="muted.400" _dark={{
                          color: "muted.200"
                      }} />
                      
                  </Box>
              </Stack>
          </Pressable>
          <Pressable   borderColor="muted.300" borderBottomWidth="0.5px" mb="0px" h="60px" bg="light.100"  android_ripple={{ color: '#00000009' }}>
              <Stack direction="row" p={3} h="60px" justifyContent="space-between">
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                      <IconButton mr="8px"  borderRadius="full" h="35px" w="35px" colorScheme="indigo"  variant="solid" _icon={{
                      as: MaterialCommunityIcons,
                      name: "robot"
                      }} />
                      <Text color="muted.800" fontSize="16px" fontWeight="400">Automations</Text>
                  </Box>
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                  
                  
                  <Icon ml="8px" as={MaterialCommunityIcons}size="lg" name="chevron-right" fontSize="24px" color="muted.400" _dark={{
                          color: "muted.200"
                      }} />
                      
                  </Box>
              </Stack>
          </Pressable>
          <Pressable   borderColor="muted.300" borderBottomWidth="0.5px" mb="0px" h="60px" bg="light.100"  android_ripple={{ color: '#00000009' }}>
              <Stack direction="row" p={3} h="60px" justifyContent="space-between">
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                      <IconButton mr="8px"  borderRadius="full" h="35px" w="35px" bg="yellow.500"  variant="solid" _icon={{
                      as: MaterialCommunityIcons,
                      name: "lightning-bolt"
                      }} />
                      <Text color="muted.800" fontSize="16px" fontWeight="400">Shortcuts</Text>
                  </Box>
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                  
                  
                  <Icon ml="8px" as={MaterialCommunityIcons}size="lg" name="chevron-right" fontSize="24px" color="muted.400" _dark={{
                          color: "muted.200"
                      }} />
                      
                  </Box>
              </Stack>
          </Pressable>
          <Pressable   borderColor="muted.300" borderBottomWidth="0.5px" mb="0px" h="60px" bg="light.100"  android_ripple={{ color: '#00000009' }}>
              <Stack direction="row" p={3} h="60px" justifyContent="space-between">
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                      <IconButton mr="8px"  borderRadius="full" h="35px" w="35px" bg="pink.500"  variant="solid" _icon={{
                      as: MaterialCommunityIcons,
                      name: "tag"
                      }} />
                      <Text color="muted.800" fontSize="16px" fontWeight="400">Tags</Text>
                  </Box>
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                  
                  
                  <Icon ml="8px" as={MaterialCommunityIcons}size="lg" name="chevron-right" fontSize="24px" color="muted.400" _dark={{
                          color: "muted.200"
                      }} />
                      
                  </Box>
              </Stack>
          </Pressable>

          <Pressable  h="60px" bg="light.100" roundedBottomLeft={8} roundedBottomRight={8} android_ripple={{ color: '#00000009' }}>
              <Stack direction="row" p={3} h="60px" justifyContent="space-between">
              <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                      <IconButton mr="8px" borderRadius="full" h="35px" w="35px" bg="yellow.400"  variant="solid" _icon={{
                      as: MaterialCommunityIcons,
                      name: "lock"
                      }} />
                      
                      <Text color="muted.800" fontSize="16px" fontWeight="400">Connect with Facebook Messenger</Text>
                  </Box>
                  <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                  
                  <Icon ml="8px" as={MaterialCommunityIcons}size="lg" name="chevron-right" fontSize="24px" color="muted.400" _dark={{
                          color: "muted.200"
                      }} />
                      
                  </Box>
              </Stack>
          </Pressable>

          
      </Stack>

  </Stack>
  <StatusBar style="light" backgroundColor='#fff'/>
</Box>
}


