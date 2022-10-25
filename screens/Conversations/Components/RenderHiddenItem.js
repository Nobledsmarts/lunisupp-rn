import { HStack, Pressable, VStack, Icon, Text, useToast } from "native-base";
import { MaterialIcons, MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons';


export default ({data, rowMap, deleteRow, onOpen, conversationModel, changeConversationData}) => {
    const toast = useToast();
    // console.log(data);
    // console.log(' = ' + data.item.id);
    return (
        <HStack flex="1" pl="2">
            <Pressable h="70px" w="80px" ml="auto" cursor="pointer" bg="muted.400" justifyContent="center" onPres={() => closeRow(rowMap, data.item.id)} _pressed={{
                opacity: 0.5
            }} onPress={onOpen}>
            <VStack alignItems="center" justifyContent="space-around" space={0}>
                <Icon as={<MaterialCommunityIcons name="menu" />} size="2xl" color="muted.50" />
                <Text fontSize="14px" fontWeight="medium" color="muted.50">
                More
                </Text>
            </VStack>
            </Pressable>
            <Pressable w="80px" cursor="pointer" bg="green.500" justifyContent="center" onPress={() => deleteRow(rowMap, data.item.id, data, toast, conversationModel, changeConversationData)} _pressed={{
                opacity: 0.5
            }}>
            <VStack alignItems="center" justifyContent="space-around" space={0}>
                <Icon as={<MaterialCommunityIcons name="check-circle" />} color="white" size="2xl" />
                <Text color="white" fontSize="14px" fontWeight="medium">
                Resolve
                </Text>
            </VStack>
            </Pressable>
        </HStack>
    );
}
