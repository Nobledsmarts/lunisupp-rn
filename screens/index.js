import { Text, Box, Stack, IconButton, Icon, Pressable } from 'native-base'

import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import Settings from './Settings';
import Conversations from './Conversations';
import Visitors from './Visitors';
import Home from './Home';
import Profile from './Profile/Index';
import  TabBar  from '../components/Tab/TabBar';
import  NavigatorScreenOptions  from '../components/Tab/NavigatorScreenOptions';
import HeaderLeft from '../components/HeaderLeft';
import HomeHeaderRight from './Home/HomeHeaderRight';
import ConversationsHeaderRight from './Conversations/ConversationsHeaderRight';



const Tab = createBottomTabNavigator();

export default function App() {
 
  // const navigation = useNavigation();
  return (
    
      <Tab.Navigator tabBar={TabBar} screenOptions={NavigatorScreenOptions} _sceneContainerStyle={{ padding : '0px' }}>
        <Tab.Screen bg="amber.200" name="Home" component={Profile}  options={{
          headerLeft : HeaderLeft,
          headerRight : HomeHeaderRight
          }}/>
        <Tab.Screen name="Conversations" component={Conversations} options={{
          headerLeft : HeaderLeft,
          headerRight : ConversationsHeaderRight
          }}/>
        <Tab.Group screenOptions={{
            headerLeft : HeaderLeft,
            presentation: 'modal'
            }}>
          <Tab.Screen name="Visitors" component={Visitors} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Group>
      </Tab.Navigator>
  );
}
