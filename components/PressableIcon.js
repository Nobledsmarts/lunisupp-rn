import { Pressable, View } from "native-base"

export default ({icon, onPress, ...props}) => {
    return (
        <View rounded="full"  overflow="hidden" {...props}>
            <Pressable onPress={onPress} rounded="full"  h="50px" w="50px" justifyContent="center" alignItems="center"  android_ripple={{ color: '#00000200' }}>
                { icon }
                {/* <Icon  boxSizing="content-box" shadow="9" color="muted.100" borderRadius="full" size="md" as={MaterialCommunityIcons} name="robot" />
                        */}
            </Pressable>
        </View>
    )
}