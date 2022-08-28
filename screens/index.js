import { View, Text, Box, Stack, IconButton, Icon } from 'native-base'
import { getHeaderTitle } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons'

import Settings from './Settings';
import Conversations from './Conversations';
import Visitors from './Visitors';
import Home from './Home';
import Profile from './Profile/Index';


const Tab = createBottomTabNavigator();

export default function App() {
  const navigation = useNavigation();
  return (
      <Tab.Navigator py={10} bg="primary.100" screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'cog' : 'cog';
            } else if(route.name =='Conversations'){
                iconName = focused ? 'chatbubble' : 'chatbubble';
            }else if(route.name =='Visitors'){
                iconName = focused ? 'people' : 'people';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

             return <Stack shadow={1} title={title} style={options.headerStyle} mt={8} p={3} justifyContent="center" direction="row" bg="#fff">
                    <Stack flexBasis="50%" direction="row" alignItems="center">
                         {/* <Box  display="flex"> */}
                          <IconButton onPress={() => navigation.push('Profile')} bg="muted.200" icon={<Icon as={AntDesign} name="user" />} borderRadius="full" _icon={{
                            color: "muted.900",
                            size: "md"
                          }} _hover={{
                            bg: "orange.600:alpha.20"
                          }} _pressed={{
                            bg: "orange.600:alpha.20",
                            _icon: {
                              name: "emoji-flirt"
                            },
                            _ios: {
                              _icon: {
                                size: "2xl"
                              }
                            }
                          }} _ios={{
                            _icon: {
                              size: "2xl"
                            }
                          }} />
                         
                         {/* </Box> */}
                         <Text  ml={2} fontSize="lg" bold> {route.name} </Text>
                    </Stack>
                    <Stack flexBasis="50%" justifyContent="flex-end" direction="row">
                         {/* <Box> 3 </Box> */}
                          <IconButton bg="muted.200" icon={<Icon as={Ionicons} name="notifications-outline" />} borderRadius="full" _icon={{
                            color: "muted.900",
                            size: "md",
                            fontWeight : 900
                          }} _hover={{
                            bg: "orange.600:alpha.20"
                          }} _pressed={{
                            bg: "orange.600:alpha.20",
                            _icon: {
                              name: "emoji-flirt"
                            },
                            _ios: {
                              _icon: {
                                size: "2xl"
                              }
                            }
                          }} _ios={{
                            _icon: {
                              size: "2xl"
                            }
                          }} />
                         
                    </Stack>
                </Stack>;
            },
          tabBarActiveTintColor: '#122aa3',
          tabBarInactiveTintColor: 'gray',
        })} _sceneContainerStyle={{ padding : '20px' }}>
        <Tab.Screen name="Home" component={Profile} />
        <Tab.Screen name="Conversations" component={Conversations} options={{ tabBarBadge: 3 }}/>
        <Tab.Screen name="Visitors" component={Visitors} options={{ tabBarBadge: 1 }}/>
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
  );
}