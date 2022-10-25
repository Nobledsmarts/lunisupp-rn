import { Actionsheet, Center, Box, Text, Icon, Stack, Pressable } from "native-base";
import { Path } from "react-native-svg";
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from "@expo/vector-icons";

import { ListItem } from "../../../components/ListItem";


export default ({isOpen, onClose}) => {
    return (
      <Center>
        <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator={true}>
          <Actionsheet.Content bg="#fff" px="0">
            <Box flexDirection="row" borderColor="muted.300" borderBottomWidth="0.9px" w="100%" h={60} px={4} justifyContent="center" alignItems="center">
              <Box>
                <Text fontWeight="600" fontSize="17" color="gray.700" _dark={{
                    color: "gray.300"
                }}>
                  Actions
                </Text>
              </Box>
              
              <Pressable onPress={onClose} height="28px" right="0" mr={4} width="28px" rounded="full"  position="absolute" display="flex" justifyContent="center" alignItems="center">
                  <Icon size="28px" as={MaterialIcons} name="cancel" color="muted.400" _dark={{color: "warmGray.50"}}  />
              </Pressable>
            </Box>
            <Actionsheet.Item startIcon={<Icon as={MaterialCommunityIcons} size="6" name="check-circle-outline" />}>
            Resolve
          </Actionsheet.Item>
          <Actionsheet.Item startIcon={<Icon as={Ionicons} name="mail-unread-outline" size="6" />}>
            Mark as unread
          </Actionsheet.Item>
          <Actionsheet.Item startIcon={<Icon as={MaterialCommunityIcons} name="account-arrow-right-outline" size="6" />}>
            Assign to...
          </Actionsheet.Item>
          <Actionsheet.Item startIcon={<Icon as={MaterialCommunityIcons} size="6" name="email-outline" />}>
            Send to e-mail
          </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </Center>
    );
}