import { Ionicons } from '@expo/vector-icons'

export default ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home';
    } else if (route.name === 'Settings') {
      iconName = focused ? 'cog' : 'cog';
    } else if(route.name =='Conversations'){
        iconName = focused ? 'chatbubble' : 'chatbubble';
    }else if(route.name =='Visitors'){
        iconName = focused ? 'people' : 'people';
    }
    return <Ionicons name={iconName} size={24} color={color} />;
  }