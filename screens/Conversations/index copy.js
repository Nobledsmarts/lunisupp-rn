// import { useEffect } from 'react'
import React, { useState } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { NativeBaseProvider, ScrollView, Box, Text, Pressable, Heading, IconButton, Icon, HStack, Avatar, VStack, Spacer, Center } from 'native-base';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import { MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

function Example() {
  const [mode, setMode] = useState('Basic');
  return (
        // <ScrollView h="100%" showsVerticalScrollIndicator={false}>
          <Basic />
        // </ScrollView>
  );
}

function Basic() {
  const data = [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Afreen Khan',
    timeStamp: '12:47 PM',
    recentText: 'Good Day!',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }, {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    fullName: 'Sujita Mathur',
    timeStamp: '11:11 PM',
    recentText: 'Cheer up, there!',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU'
  }, {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    fullName: 'Anci Barroco',
    timeStamp: '6:22 PM',
    recentText: 'Good Day!',
    avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
  }, {
    id: '68694a0f-3da1-431f-bd56-142371e29d72',
    fullName: 'Aniket Kumar',
    timeStamp: '8:56 PM',
    recentText: 'All the best',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
  }, {
    id: '28694a0f-3da1-471f-bd96-142456e29d172',
    fullName: 'Kiara',
    timeStamp: '12:47 PM',
    recentText: 'I will call today.',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
  },
  {
    id: '28694a0f-3da1-471f-bd96-142456e29d792',
    fullName: 'Kiara',
    timeStamp: '12:47 PM',
    recentText: 'I will call today.',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
  },
  {
    id: '28694a0f-3da1-471f-bd96-142456e29d762',
    fullName: 'Kiara',
    timeStamp: '12:47 PM',
    recentText: 'I will call today.',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
  },
  {
    id: '28694a0f-3da1-471f-bd96-142456e29d7',
    fullName: 'Kiara',
    timeStamp: '12:47 PM',
    recentText: 'I will call today.',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
  },
  {
    id: '2864a0f-3da1-471f-bd96-142456e29d7',
    fullName: 'Kiara',
    timeStamp: '12:47 PM',
    recentText: 'I will call today.',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
  },
  {
    id: '28694a0f3da1-471f-bd96-142456e29d7',
    fullName: 'Kiara',
    timeStamp: '12:47 PM',
    recentText: 'I will call today.',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
  },
  {
    id: '28694a0f-3da1-471f-bd96-14245e29d7',
    fullName: 'Kiara',
    timeStamp: '12:47 PM',
    recentText: 'I will call today.',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
  },
  {
    id: '28694a0f-3da1-471f-b96-142456e29d7',
    fullName: 'Kiara',
    timeStamp: '12:47 PM',
    recentText: 'I will call today.',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
  },
  ];
  const [listData, setListData] = useState(data);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
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
   
      <Box bg="#fff" width="100%" h="80px" borderColor="muted.300" borderBottomWidth="0.2px" px={4}>
        <Pressable  onPress={() => console.log('You touched me')} _dark={{
            bg: 'yellow.800'
          }} _light={{
            bg: 'yellow'
          }}>
          <Box  h="70px" py="2">
            <HStack h="70px"   alignItems="center" justifyContent="center" >
              <Box flexBasis="20%" h="70px"  alignItems="center" justifyContent="center">
              <Avatar size="50px" source={{
                uri: item.avatarUrl
              }} />
              </Box>
              <VStack  h="70px" justifyContent="center"  flexBasis="65%" space={1}>
                <Text color="info.600" fontSize="18px" fontWeight="500" _dark={{
                color: 'warmGray.50'
              }} bold>
                  {item.fullName}
                </Text>
                <Text color="coolGray.600" fontSize="12px" fontWeight="500" _dark={{
                color: 'warmGray.200'
              }}>
                  {item.recentText}
                </Text>
              </VStack>
              <VStack  h="70px" flexBasis="15%" justifyContent="center" alignItems="center" space={2}>
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
      </Box>
    // </SwipeRow>
  );

  const renderHiddenItem = (data, rowMap) => <HStack flex="1" pl="2">
      <Pressable w="80px" ml="auto" cursor="pointer" bg="coolGray.200" justifyContent="center" onPress={() => closeRow(rowMap, data.item.key)} _pressed={{
          opacity: 0.5
        }}>
        <VStack alignItems="center" space={2}>
          <Icon as={<Entypo name="dots-three-horizontal" />} size="lg" color="coolGray.800" />
          <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
            More
          </Text>
        </VStack>
      </Pressable>
      <Pressable w="80px" cursor="pointer" bg="yellow.500" justifyContent="center" onPress={() => deleteRow(rowMap, data.item.key)} _pressed={{
          opacity: 0.5
        }}>
        <VStack alignItems="center" space={2}>
          <Icon as={<MaterialIcons name="delete" />} color="white" size="lg" />
          <Text color="white" fontSize="xs" fontWeight="medium">
            Delete
          </Text>
        </VStack>
      </Pressable>
    </HStack>;

  return <Box>
      <SwipeListView showsVerticalScrollIndicator={false} data={listData} renderItem={renderItem} renderHiddenItem={renderHiddenItem} rightOpenValue={-160}  onRowDidOpen={onRowDidOpen}  disableRightSwipe={true} />
    </Box>;
}


export default () => {
    // useEffect(() => {
    // setTimeout(() => {

    //     }, 6000)
    // });
  return (<Box bg="#fff" width="100%" flex={1}>
  {/* <StatusBar bg="#3700B3" barStyle="light" translucent={true}/> */}

  <Example />
</Box>)
}

const tt = () => {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text color="muted.400" fontSize="18px" fontWeight="400">Conversations</Text>
  
</View>
}