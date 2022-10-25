import { useState } from "react";
import { Box, Button, Icon, Stack, Tooltip, Text, Center, Popover, View } from "native-base"
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { AppStyle } from "../../Styles";
import PressableIcon from "../../../components/PressableIcon";
// import { useState } from "react";

export const TooltipM = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { typography } = AppStyle;

    return (
        <Center bg="red.500" position="relative">
            <Tooltip position="relative" label="Click here to read more" openDelay={500} hasArrow={true} defaultIsOpen={true} isOpen={true} placement="top" useRNModal={true}>
                <Box shadow={1} bg="primary.50" justifyContent="center" rounded={10} mr={1} minH={180} px={3} pb={3} w={170} isOpen={true} onClose={() => setIsOpen(!isOpen)} >
                <Stack  alignItems="flex-start" justifyContent="space-between" direction="row">
                    <Box p={4} shadow="9" bg="primary.500" borderRadius="full">
                    <Icon  boxSizing="content-box" shadow="9" color="muted.100" borderRadius="full" size="md" as={Ionicons} name="chatbubble" />
                    </Box>
                    
                    
                <Button  onPress={() => setIsOpen(true)} shadow={2}>More = {JSON.stringify(isOpen)}</Button>
                </Stack>
                <Stack>
                    <Text fontSize="4xl" bold>0</Text>
                </Stack>
                <Stack>
                    <Text color="muted.600" {...typography.body1}>Incoming chats</Text>
                </Stack>
                </Box>
            </Tooltip>
        </Center>
    )
}


export const Custom = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { typography } = AppStyle;
    const [marginB, setMarginB] = useState(-150);
    const [modal, openModal] = useState('none');
    

    const calculateHeight = (event) => {
        let {height} = event.nativeEvent.layout;

        height && setMarginB(- Math.floor(height - 2));

        console.log(height);
    }

    return (
        <Box bg="red.400">
            <Box display={modal} top={marginB} position="absolute" width="110%"  style={{elevation : 900, zIndex : 900}} onLayout={calculateHeight}>
                <Box bg="blueGray.600" p="7px" alignItems="center" justifyContent="center" rounded={8}>
                    <Text alignItems="center" textAlign="center" color="muted.50" {...typography.body1}>the number of new Incoming Conversations in the selected time period</Text></Box>
                    <Center p={0} m={0} h="10px">
                        <Box  mb="10px" bg="blueGray.600" style={{transform : [{ rotate: '45deg' }]}} position="relative" w="10px"  h="10px"></Box>
                    </Center>
                </Box>
            <Box shadow={1} bg="primary.50" justifyContent="center" rounded={10} mr={1} minH={180} px={3} pb={3} w={170} isOpen={true} onClose={() => setIsOpen(!isOpen)} >
            <Stack  alignItems="flex-start" justifyContent="space-between" direction="row">
                <Box p={4} shadow="9" bg="primary.500" borderRadius="full">
                <Icon  boxSizing="content-box" shadow="9" color="muted.100" borderRadius="full" size="md" as={Ionicons} name="chatbubble" />
                </Box>
                
                
                    
            <PressableIcon onPress={() => openModal(modal == 'flex' ? 'none' : 'flex')} icon={<Icon  boxSizing="content-box"  color="primary.100" borderRadius="full" size="md" as={Ionicons} name="information-circle-outline" />}/>
            </Stack>
            <Stack>
                <Text fontSize="4xl" bold>0 {modal} </Text>
            </Stack>
            <Stack>
                <Text color="muted.600" {...typography.body1}>Incoming chats</Text>
            </Stack>
            </Box>
        </Box>
    )
}

export const m = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { typography } = AppStyle;

    return (
        <Center bg="red.500" position="relative">
            <Tooltip position="relative" label="Click here to read more" openDelay={500} hasArrow={true} defaultIsOpen={true} isOpen={true} placement="top">
                <Box shadow={1} bg="primary.50" justifyContent="center" rounded={10} mr={1} minH={180} px={3} pb={3} w={170} isOpen={true} onClose={() => setIsOpen(!isOpen)} >
                <Stack  alignItems="flex-start" justifyContent="space-between" direction="row">
                    <Box p={4} shadow="9" bg="primary.500" borderRadius="full">
                    <Icon  boxSizing="content-box" shadow="9" color="muted.100" borderRadius="full" size="md" as={Ionicons} name="chatbubble" />
                    </Box>
                    
                    
                <Button  onPress={() => setIsOpen(true)} shadow={2}>More = {JSON.stringify(isOpen)}</Button>
                </Stack>
                <Stack>
                    <Text fontSize="4xl" bold>0</Text>
                </Stack>
                <Stack>
                    <Text color="muted.600" {...typography.body1}>Incoming chats</Text>
                </Stack>
                </Box>
            </Tooltip>
        </Center>
    )
}

function PopoverC() {
    return <Box h="60%" w="100%" alignItems="center">
        <Popover  trigger={triggerProps => {
        return <Button {...triggerProps} shadow={2} colorScheme="danger">
                Delete Customer
              </Button>;
      }} disableOverlay={true} _backdrop={{
        background : 'red'
      }}>
          <Popover.Content accessibilityLabel="Delete Customerd" w="56">
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Delete Customer</Popover.Header>
            <Popover.Body>
              This will remove all data relating to Alex. This action cannot be
              reversed. Deleted data can not be recovered.
            </Popover.Body>
            <Popover.Footer justifyContent="flex-end">
              <Button.Group space={2}>
                <Button colorScheme="coolGray" variant="ghost">
                  Cancel
                </Button>
                <Button colorScheme="danger">Delete</Button>
              </Button.Group>
            </Popover.Footer>
          </Popover.Content>
        </Popover>
      </Box>;
  }

export default () => {
    return (
        <PopoverC></PopoverC>
    )
}