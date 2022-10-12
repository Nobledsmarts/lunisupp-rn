import { Actionsheet, Center, Box, Text, Icon, Stack, Pressable } from "native-base";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { ListItem } from "../../components/ListItem";


export default ({isOpen, onClose}) => {
    return (
      <Center>
        <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator={false}>
          <Actionsheet.Content bg="#fff" px="0">
            <Box flexDirection="row" borderColor="muted.300" borderBottomWidth="0.9px" w="100%" h={60} px={4} justifyContent="center" alignItems="center">
              <Box>
                <Text fontWeight="500" fontSize="20" color="gray.500" _dark={{
                    color: "gray.300"
                }}>
                  Appearance
                </Text>
              </Box>
              
              <Pressable onPress={onClose} height="28px" right="0" mr={4} width="28px" rounded="full"  position="absolute" display="flex" justifyContent="center" alignItems="center">
                  <Icon size="28px" as={MaterialIcons} name="cancel" color="muted.400" _dark={{color: "warmGray.50"}}  />
              </Pressable>
            </Box>
            <Box w="100%" p={4} m={2}>
              <ListItem showIcon={false} label="System"  labelValue="System" iconBg="indigo.600" iconType={MaterialCommunityIcons} iconName="palette"  isFirstChild={true}/>
              <ListItem showIcon={false} label="Light"  iconBg="yellow.400" iconType={MaterialCommunityIcons} iconName="lock" />
              
              <ListItem showIcon={false} label="Dark"  iconBg="yellow.400" iconType={MaterialCommunityIcons} iconName="lock"  isLastChild={true}/>
            </Box>
          </Actionsheet.Content>
        </Actionsheet>
      </Center>
    );
}