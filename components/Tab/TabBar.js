import { Text, Box, Stack, Pressable, Icon } from 'native-base'

import { SafeAreaView, } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'

export default ({state, descriptors, navigation, ...props}) => {
    const tabs = state.routes;
    return (
      <SafeAreaView>
        <Box bg="white" p="0px"  h="60px" {...props} style={{
            borderTopWidth: 0.2,
            borderTopColor : '#e0f0f0',
            elevation: 1,
            }}>
          <Stack h="60px" p="0px" mb="12px" direction='row' justifyContent='space-between' px="0px">
        
              {   
                tabs.map((route, index) => {
                  {/* console.log(state); */}
                  let iconName;
        
        

                  const hasBadge = (tab) => {
                    const tabsWithBadge = new Set(['Conversations', 'Visitors']);
                    return tabsWithBadge.has(tab)

                  };

                  const { options } = descriptors[route.key];
                  const label = route.name;

                    {/* options.tabBarLabel !== undefined
                      ? options.tabBarLabel
                      : options.title !== undefined
                      ? options.title
                      : route.name; */}

                      {/* console.log(label); */}

                  const isFocused = state.index === index;

                  const TabIcon = ({iconType = Ionicons, ...props}) => {
                    let iconName = "";
                    

                    if (route.name === 'Home') {
                        iconName = 'home';
                        iconType = Entypo;
                    } else if (route.name === 'Settings') {
                      iconName =  'cog';
                      iconType = MaterialCommunityIcons;
                    } else if(route.name =='Conversations'){
                        iconName =  'chatbubble';
                    }else if(route.name =='Visitors'){
                        iconName =  'account-multiple';
                        iconType = MaterialCommunityIcons;
                    }
                    return <Icon as={iconType} size="24px" color={ isFocused  ? "info.500" : "muted.500"} name={iconName}  /> ;
                  }

                  const onPress = () => {
                    console.log('pressed')
                    const event = navigation.emit({
                      type: 'tabPress',
                      target: route.key,
                      canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                      // The `merge: true` option makes sure that the params inside the tab screen are preserved
                      navigation.navigate({ name: route.name, merge: true });
                    }
                  };

                  const onLongPress = () => {
                    navigation.emit({
                      type: 'tabLongPress',
                      target: route.key,
                    });
                  };


                  return  (
                    <Box w="25%"   h="60px" borderRadius={50} style={{overflow: 'hidden'}} _pressed={{
                      flexBasis : '225%',
                      overflowY : 'hidden',
                      overflowX : 'auto'
                    }} 
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    
                    key={label}
                    >
                    <Pressable zIndex={9} h="60px"     borderRadius={50} android_ripple={{ color: '#00000009' }}  _pressed={{
                      flexBasis : '225%',
                      height : '112px'
                    }}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    >
                      
                      <Stack  h="60px"  
                        borderRadius={50} display="flex" alignItems="center" 
                          justifyContent="center" bg="primary" p="5px">
                        <Box position="relative">
                          {/* <Ionicons name="home" size={20} color="#737373"/> */}
                          <TabIcon  color={ isFocused  ? "info.500" : "muted.500"}/>
                          {/* <Icon as={Ionicons} size="20px" color={ isFocused  ? "info.500" : "muted.500"} name="home" /> */}
                          { 
                            hasBadge(label) &&
                            <Box bg="#ff3462" ml="18.5px" mt="-5px" borderRadius={50} 
                            w="20px" h="20px" alignItems="center" 
                          justifyContent="center" position="absolute" 
                          _text={{fontSize : 10, color : '#fff4f6'}} fontWeight="extrabold" fontSize="9px">
                            1
                            </Box>
                          }
                        </Box>
                        <Text color={ isFocused  ? "info.500" : "muted.500"} fontSize="12px" fontWeight="500"> {label} </Text>
                      </Stack> 
                      </Pressable>
                    </Box>
                  )
                })
              }
           
          </Stack>
        </Box>
      </SafeAreaView>
    )
  }

  // export default TabBar