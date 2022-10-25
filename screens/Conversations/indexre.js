import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions, 
    FlatList
} from 'react-native';

// import { Spinner } from "native-base";


import {View, Button, Spinner, NativeBaseProvider, ScrollView, Box, Text, Pressable, Heading, IconButton, Icon, HStack, Avatar, VStack, Spacer, Center, useToast, useDisclose } from 'native-base';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import { MaterialIcons, MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons';

import Actions from './Actions';

import { ActivityIndicator } from 'react-native';

import MockData from './MockData';

import requestAPI from './Actions/requestAPI';

import ConversationListItem from './ConversationListItem';

import RenderEmpty from './Components/RenderEmpty';
import RenderFooter from './Components/RenderFooter';
import RenderHiddenItem from './Components/RenderHiddenItem';

import DeleteRow from './Actions/DeleteRow';


import { StatusBar } from 'expo-status-bar';
// import { StatusBar } from 'native-base';





import { useNavigation } from '@react-navigation/native';


// console.log(MockData);
// console.log(listPages.page1);
const conversation = {
  isListEnd : false,
  moreLoading : false,
  loading : false,
  data :  [],
}

function stringToHslColor(str, s, l) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  var h = hash % 360;
  return 'hsl('+h+', '+s+'%, '+l+'%)';
}



export default () => {
  const navigation = useNavigation();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclose();
  const [animating, setAnimating] = useState(false);
  const [page, setPage] = useState(0);
  const [conversationModel, changeConversationData] = useState(conversation);
  const [listData, setListData] = useState(conversation.data);



  // React.useLayoutEffect(() => {
    // navigation.setOptions({
    //   headerTransparent: true,
    // });
    // changeConversationData({...conversationModel, data : listPages[`page${page + 1}`]});
    // console.log(conversationModel)
  // },[navigation]);


  
  // const requestAPI = requestApi;





  useEffect((previous, current) => {
    try {
    requestAPI(previous, current, page, changeConversationData, conversationModel);
    } catch(e) {
      console.log(e);
    }
  }, [page])

    

    const LoadingScreen = ({animating = false }) => {

      return (<Center flex={1} px="3" bg="amber.900">
             <ActivityIndicator animating={animating} size="small" />
            </Center>);
    }
    const fetchMoreChat = () => {
      console.log(conversationModel.isListEnd, conversationModel.moreLoading);
      if(!conversationModel.isListEnd && !conversationModel.moreLoading){
        setPage(page + 1)
        console.log(page + 1);
        // alert('setPage to be 1');
      }
      // alert('reached');
      // setAnimating(true);
    }

    const closeRow = (rowMap, rowKey) => {
        // if (rowMap[rowKey]) {
        //     rowMap[rowKey].closeRow();
        // }
    };

   
    const onRowDidOpen = rowKey => {
        // console.log('This row opened', rowKey);
    };




return <Box>
  {
    conversationModel.loading ? 
        <Box justifyContent="center" alignItems="center" h="100%">
            <ActivityIndicator size='large' />
        </Box> 
        :
      <SwipeListView 
        // swipeKey="id"
        useFlatList={true} 
        showsVerticalScrollIndicator={false} 
        data={conversationModel.data} 
        renderItem={ (conversationModel) => ConversationListItem(conversationModel.data, 'id', conversationModel, DeleteRow, onOpen) } 
        // renderItem={ (conversationModel) => <ConversationListItem item={conversationModel.data} deleteRow={DeleteRow} onOpen={onOpen} conversationModel={conversationModel}/>} \
        renderHiddenItem={() => <RenderHiddenItem data={conversationModel.data} deleteRow={DeleteRow} onOpen={onOpen} />} 
        rightOpenValue={-160} 
        stopRightSwipe={-160}  
        onRowDidOpen={onRowDidOpen} 
        disableRightSwipe={true} 
        ListFooterComponent={<RenderFooter conversationModel={conversationModel}/>}
        onEndReached={fetchMoreChat}  
        ListEmptyComponent={<RenderEmpty onPress={() => requestAPI()} />}
        onEndReachedThreshold={0.1}

      />
     
    }
    <Actions isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>;
  

    return (
        <View style={styles.container}>  
            <SwipeListView 
                data={listData}
                renderItem={ConversationListItem}
                renderHiddenItem={RenderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
                disableRightSwipe={true}
            />
        </View>
    );
}

