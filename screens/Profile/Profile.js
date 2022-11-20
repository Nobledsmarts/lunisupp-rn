import { useState } from "react";
import { Text, Box, Button, Image, Stack, Pressable, Heading, Icon, View, Switch, IconButton, ScrollView, PresenceTransition, useDisclose  } from "native-base"
import { StatusBar  } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
// import { Actionsheet, Center, Button, useDisclose } from "native-base";
import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { ListItem } from "../../components/ListItem";
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import Appearance  from "./Appearance";
import { Input } from "native-base";

import * as IntentLauncher from 'expo-intent-launcher';

// import { Input } from '@expo/html-elements';


export default ({ navigation }) => {
    const [isOnlineNotificationsEnabled, setOnlineNotifications] = useState(false);
    const [isOnline, setOnlineStatus] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclose();
    // const navigation = useNavigation();

    const offlineText = isOnlineNotificationsEnabled ? 'You are offline. You will not receive notifications in offline mode.' : 'You will receive notifications in offline mode.';
    const colorScheme = isOnlineNotificationsEnabled ? 'yellow' : 'green';

    const activeStatusLabel = isOnline ? 'Online' : 'Offline';
    const [image, setImage] = useState(null);

    const doUpload = async () => {
        let result = await IntentLauncher.startActivityAsync('android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI')
    }

    const doUploa = async () => {
        

        // const pickImage = async () => {
          // No permissions request is necessary for launching the image library
        //   let result = await ImagePicker.launchImageLibraryAsync({
        //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
        //     allowsEditing: true,
        //     presentationStyle : 'pageSheet',
        //     aspect: [4, 3],
        //     quality: 1,
        //   });
          let result = await DocumentPicker.getDocumentAsync({
            // mediaTypes: ImagePicker.MediaTypeOptions.Images,
           type : 'image/*'
          });
      
          console.log(result);
      
          if (!result.cancelled) {
            setImage(result.uri);
          }
        // };
        // let s = await pickImage();
        // console.log(s);
    }

    return (
        <ScrollView bg="#fff"  showsVerticalScrollIndicator={false}>
            <Box bg="#fff" h="100%" > 
                <Stack p={4}>
                    <PresenceTransition mb={4} visible={!isOnline} initial={{ opacity: 0}} animate={{ opacity: 1,transition: { duration: 250} }}>
                        <Box mb={4} display={isOnline ? "none" : 'flex'} p={3} minH="80px" rounded={8}  _dark={{ bg : "green.700" }} bg={ colorScheme + ".100" } _text={{ color : "green.200" }}>
                            <Stack direction="row" alignItems="center">
                                <Icon size="20px" as={MaterialCommunityIcons} name="bell-outline" color={ colorScheme + ".400" } _dark={{
                                        color: "warmGray.50"
                                    }} mr={3} />
                                <Text color={ colorScheme + ".800" } fontSize="17px" fontWeight="400">You are offline </Text>
                            </Stack>
                            <Stack>
                                <Text color={ colorScheme + ".800" } fontSize="14px" fontWeight="400">{ offlineText }</Text>
                            </Stack>
                        </Box>
                    </PresenceTransition>
                    <Pressable onPress={() => navigation.navigate('EditProfile')} mb={4} h="100px" bg="light.100" rounded={8} android_ripple={{ color: '#00000009' }}>
                        <Stack direction="row" p={5} h="100px" >
                            <Box  borderStyle="solid" borderWidth="2px" borderColor="red.50"  flexBasis="20%">
                                <Pressable  w="60px" h="60px"  onPress={doUpload} android_ripple={{ color: '#00000009' }}>
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
                        <ListItem showIcon={false} showArrow={false} label="Current Status" subLabel={activeStatusLabel} isChecked={isOnline} 
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
                        <ListItem label="Appearances" onPress={onOpen} labelValue="System" iconBg="indigo.600" iconType={MaterialCommunityIcons} iconName="palette"  isFirstChild={true}/>
                        <ListItem onPress={() => navigation.navigate('ChangePassword')} label="Change Password"  iconBg="yellow.400" iconType={MaterialCommunityIcons} iconName="lock"  isLastChild={true}/>

                        <Appearance isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
                    </Stack>

                    <Stack mb={4}>
                        <ListItem label="Logout" iconBg="red.600" iconType={MaterialCommunityIcons} iconName="power"  isFirstChild={true} isLastChild={true}/>
                    </Stack>
                </Stack>
                <StatusBar style="dark" backgroundColor='#fff'/>
            </Box>
        </ScrollView>
    )
}