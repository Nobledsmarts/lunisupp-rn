import { Text, Box, Stack, IconButton, Icon, Pressable } from 'native-base'

import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import Settings from './Settings';
// import Conversations from './Conversations';
// import Conversations from './Conversatio';
import Conversations from './Conversations';
import Visitors from './Visitors';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import  TabBar  from '../components/Tab/TabBar';
import  NavigatorScreenOptions  from '../components/Tab/NavigatorScreenOptions';
import HeaderLeft from '../components/HeaderLeft';
import HomeHeaderRight from './Home/HomeHeaderRight';
import ConversationsHeaderRight from './Conversations/ConversationsHeaderRight';

import ProfileNavigator from './Profile/ProfileNavigator';


// C:\Program Files\Java\jre1.8.0_341\bin\javaw.exe
const Tab = createBottomTabNavigator();

export default function App() {
 
  // const navigation = useNavigation();
  return (
    
      <Tab.Navigator tabBar={TabBar} screenOptions={NavigatorScreenOptions} _sceneContainerStyle={{ padding : '0px' }}>
        <Tab.Screen bg="amber.200" name="Home" component={Home}  options={{
          headerLeft : HeaderLeft,
          headerRight : HomeHeaderRight,
          headerShadowVisible : true,
          }}/>
        <Tab.Screen name="Conversations" component={Conversations} options={{
          headerLeft : HeaderLeft,
          headerRight : ConversationsHeaderRight,
          headerShadowVisible : true,
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
