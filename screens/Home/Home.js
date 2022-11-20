import { useState } from 'react'
import {InfoOutlineIcon, Popover, View, Text, ScrollView, Stack, Box, Icon, IconButton, Tooltip, Button, Spacer } from 'native-base'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar  } from 'expo-status-bar';
import { AppStyle } from '../Styles'
import ItemBox from './Components/ItemBox';
import PressableIcon from '../../components/PressableIcon';
// import { Tooltip } from 'native-base';

export default  () => {
   const [isOpen, setIsOpen] = useState(false);
   const { typography } = AppStyle;
  //  console.log(AppStyle);
  return (
    <>
    <ScrollView bg="white"  h="80" _contentContainerStyle={{
      px: "20px",
      mb: "4",
      minW: "72",
      position : 'relative',
      zIndex : 1,
    }}>
    <Box my={3}>
      <Stack py={4} justifyContent="space-between" direction="row">
        <Text color="muted.500" {...typography.body1}>Another section</Text>
        <Text color="primary.300" {...typography.body1}>Last 7 Days</Text>
      </Stack>
       <Stack justifyContent="flex-start"  direction="row">
        
          <Box shadow={1} bg="secondary.50" justifyContent="center" rounded={10} mr={1} minH={180} px={3} pb={3} w={170}>
            <Stack  alignItems="flex-start" justifyContent="space-between" direction="row">
              <Box p={4} shadow="9" bg="secondary.500" borderRadius="full">
                <Icon  boxSizing="content-box" shadow="9" color="muted.100" borderRadius="full" size="md" as={Ionicons} name="chatbubble" />
              </Box>
             
              <Tooltip label="Click here to read more" openDelay={500} placement="bottom left">
<IconButton  icon={<InfoOutlineIcon />} borderRadius="full" _icon={{
                            color: "secondary.100",
                            size: "md"
                          }} _ios={{
                            _icon: {
                              size: "2xl"
                            }
                          }} />
              </Tooltip>
            </Stack>
            <Stack>
              <Text fontSize="4xl" bold>0</Text>
            </Stack>
            <Stack>
              <Text color="muted.600">Incoming chats</Text>
            </Stack>
          </Box>
          <Box shadow={1} bg="secondary.50" justifyContent="center" rounded={10} ml={1} minH={180} px={3} pb={3} w={170}>
            <Stack alignItems="flex-start" justifyContent="space-between" direction="row">
              <Box p={4} shadow="9" bg="secondary.500" borderRadius="full">
                <Icon  boxSizing="content-box" shadow="9" color="muted.100" borderRadius="full" size="md" as={AntDesign} name="heart" />
              </Box>
            
              <Tooltip label="Click here to read more" openDelay={500} placement="bottom left">
<IconButton  icon={<InfoOutlineIcon />} borderRadius="full" _icon={{
                            color: "secondary.100",
                            size: "md"
                          }} _ios={{
                            _icon: {
                              size: "2xl"
                            }
                          }} />
              </Tooltip>
            </Stack>
           <Stack>
              <Text fontSize="4xl" bold>0%</Text>
            </Stack>
            <Stack>
              <Text color="muted.600">Average Rating</Text>
            </Stack>
          </Box>
        
      </Stack>
      </Box>
      <Box my={3}>
      <Stack py={4} justifyContent="space-between" direction="row">
        <Text color="muted.500" {...typography.body1}>Conversations</Text>
        <Text color="primary.300" {...typography.body1}>Last 7 Days</Text>
      </Stack>
       <Stack justifyContent="flex-start"  direction="row" >
        {/* <Popover trigger={triggerProps => {
          return <Box shadow={1} bg="primary.50" justifyContent="center" rounded={10} mr={1} minH={180} px={3} pb={3} w={170} isOpen={true} onClose={() => setIsOpen(!isOpen)} >
            <Stack  alignItems="flex-start" justifyContent="space-between" direction="row">
              <Box p={4} shadow="9" bg="primary.500" borderRadius="full">
                <Icon  boxSizing="content-box" shadow="9" color="muted.100" borderRadius="full" size="md" as={Ionicons} name="chatbubble" />
              </Box>
               
                  
              
            <Button {...triggerProps} onPress={() => setIsOpen(true)} shadow={2}>More = {JSON.stringify(isOpen)}</Button>
            </Stack>
            <Stack>
              <Text fontSize="4xl" bold>0</Text>
            </Stack>
            <Stack>
              <Text color="muted.600" {...typography.body1}>Incoming chats</Text>
            </Stack>
          </Box>
              }}>
          <Popover.Content b={0}  accessibilityLabel="Delete Customerd" w="56">
              <Popover.Arrow b={0} bg="muted.800" />
              
              
              <Popover.Body b={0} bg="muted.800">
                This will remove all data relating to Alex. This action cannot be
                reversed. Deleted data can not be recovered.
              </Popover.Body>
              
            </Popover.Content>
          </Popover> */}

          <ItemBox/>
          {/* <Popover onClose={() => setIsOpen(!isOpen)} isOpen={isOpen} placement="top" trigger={triggerProps => {
            return  <Box {...triggerProps} shadow={1} bg="secondary.50" justifyContent="center" rounded={10} ml={1} minH={180} px={3} pb={3} w={170}>
            <Stack alignItems="flex-start" justifyContent="space-between" direction="row">
              <Box p={4} shadow="9" bg="secondary.500" borderRadius="full">
                <Icon  boxSizing="content-box" shadow="9" color="muted.100" borderRadius="full" size="md" as={AntDesign} name="heart" />
              </Box>
            
              
              <IconButton onPress={() => setIsOpen(true)}  icon={<InfoOutlineIcon />} borderRadius="full" _icon={{
                            color: "secondary.100",
                            size: "md"
                          }} _ios={{
                            _icon: {
                              size: "2xl"
                            }
                          }} />
             
            </Stack>
           <Stack>
              <Text fontSize="4xl" bold>0%</Text>
            </Stack>
            <Stack>
              <Text color="muted.600" {...typography.body1}>Average Rating</Text>
            </Stack>
          </Box>;
          }}>
            <Popover.Content accessibilityLabel="Delete Customerd" r={30} w="200">
              <Popover.Arrow bg="muted.600" />
            

              <Popover.Body p={2} _text={{ color : "muted.100" }} bg="muted.600" justifyContent="center">
                Average rating you get in the selected period of time
              </Popover.Body>
              
            </Popover.Content>
          </Popover> */}
         
        
      </Stack>
      </Box>

      <Box my={3}>
      <Stack py={4} justifyContent="space-between" direction="row">
        <Text color="muted.500" {...typography.body1}>Chatbot</Text>
        <Text color="primary.300" {...typography.body1}>Last 7 Days</Text>
      </Stack>
      <ScrollView horizontal={true}  _contentContainerStyle={{
         
          mb: "4",
          pb : "1"
         
        }}>
       <Stack justifyContent="center"  direction="row">
        <Box shadow={1} bg="primary.50" justifyContent="center" rounded={10} mr={1} minH={180} px={3} pb={3} w={170}>
            <Stack  alignItems="flex-start" justifyContent="space-between" direction="row">
              <Box p={4} shadow="9" bg="primary.500" borderRadius="full">
                <Icon  boxSizing="content-box" shadow="9" color="muted.100" borderRadius="full" size="md" as={MaterialCommunityIcons} name="robot" />
              </Box>
              <Tooltip label="Click here to read more" openDelay={500} placement="bottom left">
<IconButton  icon={<InfoOutlineIcon />} borderRadius="full" _icon={{
                            color: "primary.100",
                            size: "md"
                          }} _ios={{
                            _icon: {
                              size: "2xl"
                            }
                          }} />
              </Tooltip>
            </Stack>
            <Stack>
              <Text fontSize="4xl" bold>0</Text>
            </Stack>
            <Stack>
              <Text color="muted.700" fontWeight="semibold" {...typography.body1} >Triggered</Text>
              <Box flexDirection="row" display="flex" justifyContent="flex-start" alignItems="flex-start" color="muted.600">
                <AntDesign name="arrowright" size={24} color="black" /> <Text {...typography.body1}>0%</Text>
              </Box>
            </Stack>
          </Box>
          <Box shadow={1} bg="primary.50" justifyContent="center" rounded={10} mx={1} minH={180} px={3} pb={3} w={170}>
            <Stack alignItems="flex-start" justifyContent="space-between" direction="row">
              <Box p={4} shadow="9" bg="primary.500" borderRadius="full">
                <Icon  boxSizing="content-box" shadow="9" color="muted.100" borderRadius="full" size="md" as={Octicons} name="arrow-switch" />
              </Box>
              <Tooltip label="Click here to read more" openDelay={500} placement="bottom left">
<IconButton  icon={<InfoOutlineIcon />} borderRadius="full" _icon={{
                            color: "primary.100",
                            size: "md"
                          }} _ios={{
                            _icon: {
                              size: "2xl"
                            }
                          }} />
              </Tooltip>
            </Stack>
           <Stack>
              <Text fontSize="4xl" bold>0</Text>
            </Stack>
             <Stack>
              <Text color="muted.700" fontWeight="semibold" {...typography.body1}>Reactions</Text>
              <Box flexDirection="row" display="flex" justifyContent="flex-start" alignItems="flex-start" color="muted.600">
                <AntDesign name="arrowright" size={24} color="black" /> <Text {...typography.body1}>0%</Text>
              </Box>
            </Stack>
          </Box>
          <Box shadow={1} bg="primary.50" justifyContent="center" rounded={10} mx={1} minH={180} px={3} pb={3} w={170}>
            <Stack  alignItems="flex-start" justifyContent="space-between" direction="row">
              <Box p={4} shadow="9" bg="primary.500" borderRadius="full">
                <Icon  boxSizing="content-box" shadow="9" color="muted.100" borderRadius="full" size="md" as={FontAwesome} name="check" />
              </Box>
              <Tooltip label="Click here to read more" openDelay={500} placement="bottom left">
<IconButton  icon={<InfoOutlineIcon />} borderRadius="full" _icon={{
                            color: "primary.100",
                            size: "md"
                          }} _ios={{
                            _icon: {
                              size: "2xl"
                            }
                          }} />
              </Tooltip>
            </Stack>
            <Stack>
              <Text fontSize="4xl" bold>0</Text>
            </Stack>
            <Stack>
              <Text color="muted.700" fontWeight="semibold" {...typography.body1}>Resolved by Chatbot</Text>
              <Box flexDirection="row" display="flex" justifyContent="flex-start" alignItems="flex-start" color="muted.600">
                <AntDesign name="arrowright" size={24} color="black" /> <Text {...typography.body1}>0%</Text>
              </Box>
            </Stack>
          </Box>
          <Box shadow={1} bg="primary.50" justifyContent="center" rounded={10} ml={1} minH={180} px={3} pb={3} w={170}>
            <Stack alignItems="flex-start" justifyContent="space-between" direction="row">
              <Box p={4} shadow="9" bg="primary.500" borderRadius="full">
                <Icon  boxSizing="content-box" shadow="9" color="muted.100" borderRadius="full" size="md" as={FontAwesome } name="user" />
              </Box>
              <Tooltip label="Click here to read more" openDelay={500} placement="bottom left">
<IconButton  icon={<InfoOutlineIcon />} borderRadius="full" _icon={{
                            color: "primary.100",
                            size: "md"
                          }} _ios={{
                            _icon: {
                              size: "2xl"
                            }
                          }} />
              </Tooltip>
            </Stack>
           <Stack>
              <Text fontSize="4xl" bold>0</Text>
            </Stack>
             <Stack>
              <Text color="muted.700" fontWeight="semibold" {...typography.body1}>Escalated to human</Text>
              <Box flexDirection="row" display="flex" justifyContent="flex-start" alignItems="flex-start" color="muted.600">
                <AntDesign name="arrowright" size={24} color="black" /> <Text {...typography.body1}>0%</Text>
              </Box>
            </Stack>
          </Box>
      </Stack>
        </ScrollView>

      </Box>
       
      <Box my={3}>
      <Stack py={4} justifyContent="space-between" direction="row">
        <Text color="muted.500" {...typography.body1}>Another section</Text>
        <Text color="primary.300" {...typography.body1}>Last 7 Days</Text>
      </Stack>
       <Stack justifyContent="flex-start"  direction="row">
        
          <Box shadow={1} bg="secondary.50" justifyContent="center" rounded={10} mr={1} minH={180} px={3} pb={3} w={170}>
            <Stack  alignItems="flex-start" justifyContent="space-between" direction="row">
              <Box p={4} shadow="9" bg="secondary.500" borderRadius="full">
                <Icon  boxSizing="content-box" shadow="9" color="muted.100" borderRadius="full" size="md" as={Ionicons} name="chatbubble" />
              </Box>
             
              <Tooltip label="Click here to read more" openDelay={500} placement="bottom left">
<IconButton  icon={<InfoOutlineIcon />} borderRadius="full" _icon={{
                            color: "secondary.100",
                            size: "md"
                          }} _ios={{
                            _icon: {
                              size: "2xl"
                            }
                          }} />
              </Tooltip>
            </Stack>
            <Stack>
              <Text fontSize="4xl" bold>0</Text>
            </Stack>
            <Stack>
              <Text color="muted.600">Incoming chats</Text>
            </Stack>
          </Box>
          <Box shadow={1} bg="secondary.50" justifyContent="center" rounded={10} ml={1} minH={180} px={3} pb={3} w={170}>
            <Stack alignItems="flex-start" justifyContent="space-between" direction="row">
              <Box p={4} shadow="9" bg="secondary.500" borderRadius="full">
                <Icon  boxSizing="content-box" shadow="9" color="muted.100" borderRadius="full" size="md" as={AntDesign} name="heart" />
              </Box>
            
              <Tooltip label="Click here to read more" openDelay={500} placement="bottom left">
<IconButton  icon={<InfoOutlineIcon />} borderRadius="full" _icon={{
                            color: "secondary.100",
                            size: "md"
                          }} _ios={{
                            _icon: {
                              size: "2xl"
                            }
                          }} />
              </Tooltip>
            </Stack>
           <Stack>
              <Text fontSize="4xl" bold>0%</Text>
            </Stack>
            <Stack>
              <Text color="muted.600">Average Rating</Text>
            </Stack>
          </Box>
        
      </Stack>
      </Box>
        
    </ScrollView>
    <StatusBar style="light" backgroundColor='#fff'/>
    </>
  );
}