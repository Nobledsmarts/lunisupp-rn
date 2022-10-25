import { Dimensions } from "react-native";
import { useToast, Box, Text, Pressable } from "native-base";

export default (rowMap, rowKey, data, toast, conversationModel, changeConversationData) => {
  
  // console.log(conversations);
  // alert('working');
    // const toast = useToast();
    const windowWidth = Dimensions.get('window').width;

      // closeRow(rowMap, rowKey);
      const newData = [...conversationModel.data];
      const prevIndex = conversationModel.data.findIndex(item => item.id === rowKey);
      let removedConversation = newData.splice(prevIndex, 1);

      // console.log(removed);
      // prevIndex
      changeConversationData({...conversationModel,  data : newData});
      // setListData(newData);
      const undoDelete = () => {
        toast.closeAll();
        let conversationCopy = [...conversationModel.data];
        // conversationCopy.splice(prevIndex, 0, removedConversation);
        console.log(conversationCopy);
        changeConversationData({...conversationModel,  data : conversationCopy});

      }
      toast.show({
        render: () => {
          return <Box alignItems="center" justifyContent="space-between" flexDirection="row" w={`${windowWidth - 24}px`}  rounded="sm" bg="muted.600" mx={4} p={3.5}  mb={5}>
                  <Text fontSize="14px" color="muted.50">Conversation was resolved</Text>
                  <Pressable onPress={undoDelete}><Text fontWeight="500" fontSize="15px" color="blue.300" >UNDO</Text></Pressable>
                </Box>;
        }
      });
  };