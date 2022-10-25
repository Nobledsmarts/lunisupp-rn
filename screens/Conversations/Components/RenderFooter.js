import { View, Text } from "native-base"
import { ActivityIndicator } from "react-native"

export default ({conversationModel}) => (
    <View bg="white" justifyContent="center" alignItems="center" py="4">
        {(conversationModel.moreLoading) && <ActivityIndicator />}
        {conversationModel.isListEnd && <Text color="muted.700" fontSize="14px" fontWeight="300">No more Conversations at the moment</Text>}
    </View>
  )