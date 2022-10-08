import {  Text, Box, Stack, Pressable,  Icon, IconButton, Switch } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
  

export const ListItem = ({ iconType,  iconName, iconBg, label, labelValue = "", isFirstChild = false, isToggle = false, onToggle, isChecked = false,  isLastChild = false, showArrow = true, showIcon = true, subLabel = "", ...props}) => {
    const itemRadius = 8;

    return (
        <Pressable  h="60px" bg="light.100" roundedTopLeft={ isFirstChild ? itemRadius : 0} roundedTopRight={ isFirstChild ? itemRadius : 0} roundedBottomLeft={ isLastChild ? itemRadius : 0} roundedBottomRight={ isLastChild ? itemRadius : 0} borderColor="muted.300" borderBottomWidth={!isLastChild ? "0.5px" : "0px"} android_ripple={{ color: '#00000009' }} {...props}>
              <Stack direction="row" p={3} h="60px" justifyContent="space-between">
                <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                     {
                        showIcon &&
                        <IconButton mr="8px" borderRadius="full" h="35px" w="35px" bg={iconBg}  variant="solid" _icon={{
                      as: iconType,
                      name: iconName
                      }} />
                     }
                     <Box height="100%" justifyContent="center">
                      <Text color="muted.800" fontSize="16px" fontWeight="400">{ label }</Text>
                       { !!subLabel  && <Text color="muted.700" fontSize="14px" fontWeight="300">{ subLabel }</Text> }
                      </Box>
                </Box>
                <Box flexDirection="row" height="100%" display="flex" alignItems="center" justifyContent="flex-start" >
                <Text color="muted.400" fontSize="16px" fontWeight="300">{labelValue}</Text>
                {
                    isToggle ?
                    <Switch offTrackColor="blue.200" onTrackColor="blue.300" onThumbColor="blue.500" offThumbColor="blue.50" isChecked={isChecked} onToggle={onToggle}/> :
                    showArrow &&
                    <Icon ml="8px" as={MaterialCommunityIcons}size="lg" name="chevron-right" fontSize="24px" color="muted.400" _dark={{
                          color: "muted.200"
                      }} />
                }
                </Box>
            </Stack>
        </Pressable>
    );
}
