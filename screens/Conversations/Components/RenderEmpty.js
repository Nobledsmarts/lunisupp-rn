import { View, Button, Text } from "native-base"

export default ({ onPress }) => (
    <View>
        <Text>No Data at the moment</Text>
        <Button onPress={onPress}>Refresh</Button>
    </View>
  )