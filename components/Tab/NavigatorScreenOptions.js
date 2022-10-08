import HeaderTitle from "./HeaderTitle";
import  TabBarIcon  from "./TabBarIcon";

export default ({ route }) => ({
    headerTitle : () => <HeaderTitle route={route}/>,
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight : '500'
    },
    tabBarStyle : { 
      backgroundColor: '#ffff', 
      height : 60, 
      paddingTop : 8, 
      paddingBottom : 12, 
      position : 'relative',
      boxSizing : 'content-box',
      boxShadow : 'none',
      border : 'none',
      borderTopWidth: 0.2,
      borderTopColor : '#e0f0f0',
      elevation: 1,
      fontSize : 40,
    },
      
    tabBarItemStyle:{
        // backgroundColor:'#00ff00',
        // margin:5,
        borderRadius:10,
    },
    headerStyle : {
        backgroundColor : '#fff',
        height : 120,
       
        // marginTop: Platform.OS == "ios" ? 20 : 0
    },
      
    tabBarIcon: TabBarIcon,
    // headerStyle : {},

    tabBarActiveTintColor: '#122aa3',
    tabBarInactiveTintColor: 'gray',
})