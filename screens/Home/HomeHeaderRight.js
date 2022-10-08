import { Text, Box, Stack, Pressable, Icon, IconButton, View } from 'native-base'
import {AntDesign, Ionicons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'

export default () => (
    <View  mr={4}>
    <Stack direction="row">
    <IconButton  
    mr={2}
    flex="0"
    onPress={() => navigation.push('Profile')} bg="muted.200" icon={<Icon as={MaterialCommunityIcons} name="speedometer" />} 
    borderRadius="full" 
    _icon={{
    color: "muted.900",
    size: "md"
    }}
    _pressed={{
        bg: "orange.600:alpha.20",
        _icon: {
            name: "emoji-flirt"
        },
        _ios: {
            _icon: {
                size: "2xl"
            }
        }
    }} 
    _ios={{
        _icon: {
            size: "2xl"
        }
    }} />
    <IconButton  
    
    flex="0"
    onPress={() => navigation.push('Profile')} bg="muted.200" icon={<Icon as={Ionicons} name="notifications-outline" />} 
    borderRadius="full" 
    _icon={{
    color: "muted.900",
    size: "md"
    }}
    _pressed={{
        bg: "orange.600:alpha.20",
        _icon: {
            name: "emoji-flirt"
        },
        _ios: {
            _icon: {
                size: "2xl"
            }
        }
    }} 
    _ios={{
        _icon: {
            size: "2xl"
        }
    }} />
    </Stack>
    </View>
)