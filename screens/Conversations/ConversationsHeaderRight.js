import { Text, Box, Stack, Pressable, Icon, IconButton, View } from 'native-base'
import {AntDesign, Ionicons, Octicons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'

export default () => (
    <View  mr={4}>
    <View>
    <IconButton  
    // h="24px" 
    // w="24px"
    flex="0"
    onPress={() => navigation.push('Profile')} bg="muted.200" icon={<Icon as={Octicons} name="tasklist" />} 
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
    </View>
    </View>
)