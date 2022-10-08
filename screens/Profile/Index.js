import { useState } from "react";
import { Text, Box, Stack, Pressable, Heading, Icon, View, Switch, IconButton, ScrollView } from "native-base"
import { StatusBar  } from 'expo-status-bar';
import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { ListItem } from "../../components/ListItem";


export default  Profile = () => {
    const [isOnlineNotificationsEnabled, setOnlineNotifications] = useState(false);
    const [isOnline, setOnlineStatus] = useState(false);

    const doSetOnlineNotifications = () => {

    }

    return (
        <ScrollView bg="amber.600"  showsVerticalScrollIndicator={false}>
            <Box bg="#fff" h="100%" > 
                <Stack p={4}>
                    <Box display={!isOnline && "none"} p={4} minH="80px" rounded={8} mb={4} bg="green.700" _text={{ color : "green.200" }}>
                        <Stack direction="row" alignItems="center">
                            <Icon size="sm" as={MaterialCommunityIcons} name="bell-outline" color="green.200" _dark={{
                                    color: "warmGray.50"
                                }} mr={3} />
                            <Text color="green.300" fontSize="17px" fontWeight="500">You are offline</Text>
                        </Stack>
                        <Stack>
                            <Text color="green.300" fontSize="14px" fontWeight="500">You will receive notifications in offline mode. </Text>
                        </Stack>
                    </Box>
                    <Pressable mb={4} h="100px" bg="light.100" rounded={8} android_ripple={{ color: '#00000009' }}>
                        <Stack direction="row" p={5} h="100px" >
                            <Box  borderStyle="solid" borderWidth="2px" borderColor="red.50"  flexBasis="20%">
                                <Pressable android_ripple={{ color: '#00000009' }}>
                                    <Box bg="blue.400" justifyContent="center" alignItems="center" w="60px" h="60px"  overflow="hidden" rounded={50}>
                                        <Icon size="6xl" marginBottom="-20px" as={MaterialCommunityIcons} name="account" color="blue.100" _dark={{
                                    color: "warmGray.50"
                                }} />
                                    </Box>
                                    <IconButton bottom="0px" right="0px" position="absolute"  size="sm"  borderRadius="full" h="28px" w="28px" colorScheme="indigo"  variant="solid" _icon={{
                                    as: MaterialCommunityIcons,
                                    name: "camera",
                                    }} />
                                </Pressable>
                            </Box>
                            <Box  flexBasis="60%" pl="9px" pt="7px">
                                <Heading color="muted.700" size="md" fontWeight="600">Support</Heading>
                            </Box>
                            <Box  display="flex" justifyContent="center" alignItems="flex-end" flexBasis="20%">
                            <Icon as={MaterialCommunityIcons} size="lg" name="chevron-right" fontSize="24px" color="muted.400" _dark={{
                                    color: "muted.200"
                                }} />
                            </Box>
                        </Stack>
                    </Pressable>
                    <Stack mb={4}>
                        <ListItem showIcon={false} showArrow={false} label="Current Status" subLabel="Online" isChecked={isOnline} 
                        onToggle={() => setOnlineStatus(!isOnline)} isToggle={true} iconBg="indigo.600" iconType={MaterialCommunityIcons} iconName="palette"  isFirstChild={true}/>

                        <ListItem showIcon={false} showArrow={false} label="Notifications when offline" isChecked={isOnlineNotificationsEnabled} 
                        onToggle={() => setOnlineNotifications(!isOnlineNotificationsEnabled)} isToggle={true} iconBg="indigo.600" iconType={MaterialCommunityIcons} iconName="palette"  isLastChild={true}/>
                        
                    </Stack>

                    <Stack mb={4}>
                        <Text color="muted.400"  fontSize="16px" fontWeight="400" my={2}>Activity in last month</Text>
                        <ListItem showIcon={false} showArrow={false} label="Conversations" labelValue="0" iconBg="indigo.600" iconType={MaterialCommunityIcons} iconName="palette"  isFirstChild={true}/>
                        <ListItem showIcon={false} showArrow={false} label="Rating" labelValue="0" iconBg="indigo.600" iconType={MaterialCommunityIcons} iconName="palette"  isLastChild={true}/>
                    </Stack>

                    <Stack mb={4}>
                        <ListItem label="Appearances" labelValue="System" iconBg="indigo.600" iconType={MaterialCommunityIcons} iconName="palette"  isFirstChild={true}/>
                        <ListItem label="Change Password"  iconBg="yellow.400" iconType={MaterialCommunityIcons} iconName="lock"  isLastChild={true}/>
                    </Stack>

                    <Stack mb={4}>
                        <ListItem label="Logout" iconBg="red.600" iconType={MaterialCommunityIcons} iconName="power"  isFirstChild={true} isLastChild={true}/>
                    </Stack>

                    
                </Stack>
                <StatusBar style="light" backgroundColor='#fff'/>
            </Box>
        </ScrollView>
    )
}