import React, { useState } from 'react';
import {
    StyleSheet,
  
    TouchableOpacity,
    TouchableHighlight,
     Dimensions, 
} from 'react-native';

import {View, NativeBaseProvider, ScrollView, Box, Text, Pressable, Heading, IconButton, Icon, HStack, Avatar, VStack, Spacer, Center } from 'native-base';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import { MaterialIcons, MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar';
// import { StatusBar } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const data = [{
  key: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  fullName: 'Afreen Khan',
  timeStamp: '12:47 PM',
  recentText: 'Good Day!',
  avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}, {
  key: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  fullName: 'Sujita Mathur',
  timeStamp: '11:11 PM',
  recentText: 'Cheer up, there!',
  avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU'
}, {
  key: '58694a0f-3da1-471f-bd96-145571e29d72',
  fullName: 'Anci Barroco',
  timeStamp: '6:22 PM',
  recentText: 'Good Day!',
  avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
}, {
  key: '68694a0f-3da1-431f-bd56-142371e29d72',
  fullName: 'Aniket Kumar',
  timeStamp: '8:56 PM',
  recentText: 'All the best',
  avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
}, {
  key: '28694a0f-3da1-471f-bd96-142456e29d172',
  fullName: 'Kiara',
  timeStamp: '12:47 PM',
  recentText: 'I will call today.',
  avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
},
{
  key: '28694a0f-3da1-471f-bd96-142456e29d792',
  fullName: 'Kiara',
  timeStamp: '12:47 PM',
  recentText: 'I will call today.',
  avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
},
{
  key: '28694a0f-3da1-471f-bd96-142456e29d762',
  fullName: 'Kiara',
  timeStamp: '12:47 PM',
  recentText: 'I will call today.',
  avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
},
{
  key: '28694a0f-3da1-471f-bd96-142456e29d7',
  fullName: 'Kiara',
  timeStamp: '12:47 PM',
  recentText: 'I will call today.',
  avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
},
{
  key: '2864a0f-3da1-471f-bd96-142456e29d7',
  fullName: 'Kiara',
  timeStamp: '12:47 PM',
  recentText: 'I will call today.',
  avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
},
{
  key: '28694a0f3da1-471f-bd96-142456e29d7',
  fullName: 'Kiara',
  timeStamp: '12:47 PM',
  recentText: 'I will call today.',
  avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
},
{
  key: '28694a0f-3da1-471f-bd96-14245e29d7',
  fullName: 'Kiara',
  timeStamp: '12:47 PM',
  recentText: 'I will call today.',
  avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
},
{
  key: '28694a0f-3da1-471f-b96-142456e29d7',
  fullName: 'Kiara',
  timeStamp: '12:47 PM',
  recentText: 'I will call today.',
  avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
},
];

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
  // React.useLayoutEffect(() => {
    // navigation.setOptions({
    //   headerTransparent: true,
    // });
  // },[navigation]);
    const [listData, setListData] = useState(data);

    const closeRow = (rowMap, rowKey) => {
        // if (rowMap[rowKey]) {
        //     rowMap[rowKey].closeRow();
        // }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const renderItem = ({item,index}) => (
   
      <Pressable  android_ripple={{ color: '#00000009' }} bg="#fff" width="100%" h="70px" borderColor="muted.300" px={4}>
      
          <Box  h="100%" py="2">
            <HStack h="100%"   alignItems="center" justifyContent="center" >
              <Box flexBasis="20%" h="100%"  alignItems="center" justifyContent="center">
              <Avatar size="50px" source={{
                uri: item.avatarUrl
              }} />
              </Box>
              <VStack  h="100%" justifyContent="center"  flexBasis="65%" space={1}>
                <Text color="info.600" fontSize="16px" fontWeight="300" _dark={{
                color: 'warmGray.50'
              }} bold>
                  {item.fullName}
                </Text>
                <Text color="coolGray.500" fontSize="15px" fontWeight="400" _dark={{
                color: 'warmGray.200'
              }}>
                  {item.recentText}
                </Text>
              </VStack>
              <VStack  h="100%" flexBasis="15%" justifyContent="center" alignItems="center" space={2}>
                <Text color="info.600" fontSize="10px" fontWeight="500" _dark={{
                color: 'warmGray.50'
              }} bold>
                  17:05
                </Text>
                <Box alignItems="center" justifyContent="center" rounded="full" bg="info.600" color="coolGray.600" w="24px" h="24px" fontWeight="500" _dark={{
                color: 'warmGray.200'
              }}>
                  <Text color="info.100" fontSize="14px" fontWeight="300" _dark={{
                  color: 'warmGray.50'
                }} >
                    1
                  </Text>
                
                </Box>
              </VStack>
              {/* <Spacer bg="yellow.600"/> */}
              {/* <Text fontSize="xs" color="coolGray.800" _dark={{
              color: 'warmGray.50'
            }} alignSelf="flex-start">
                {item.timeStamp}
              </Text> */}
            </HStack>
          </Box>
        
      </Pressable>
    // </SwipeRow>
  );


  const renderHiddenItem = (data, rowMap) => <HStack flex="1" pl="2">
  <Pressable h="70px" w="80px" ml="auto" cursor="pointer" bg="muted.400" justifyContent="center" onPress={() => closeRow(rowMap, data.item.key)} _pressed={{
      opacity: 0.5
    }}>
    <VStack alignItems="center" justifyContent="space-around" space={0}>
      <Icon as={<MaterialCommunityIcons name="menu" />} size="2xl" color="muted.50" />
      <Text fontSize="18px" fontWeight="medium" color="muted.50">
        More
      </Text>
    </VStack>
  </Pressable>
  <Pressable w="80px" cursor="pointer" bg="green.500" justifyContent="center" onPress={() => deleteRow(rowMap, data.item.key)} _pressed={{
      opacity: 0.5
    }}>
    <VStack alignItems="center" justifyContent="space-around" space={0}>
      <Icon as={<MaterialCommunityIcons name="check-circle" />} color="white" size="2xl" />
      <Text color="white" fontSize="16px" fontWeight="medium">
        Resolve
      </Text>
    </VStack>
  </Pressable>
</HStack>;

return <Box>

      <SwipeListView showsVerticalScrollIndicator={false} data={listData} renderItem={renderItem} renderHiddenItem={renderHiddenItem} rightOpenValue={-160}  onRowDidOpen={onRowDidOpen}  disableRightSwipe={true} />
    </Box>;

    return (
        <View style={styles.container}>
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
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

