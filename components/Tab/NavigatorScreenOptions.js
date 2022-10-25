import HeaderTitle from "./HeaderTitle";
import  TabBarIcon  from "./TabBarIcon";
import { Box, Stack } from "native-base";
import HomeHeaderRight from "../../screens/Home/HomeHeaderRight";
import ConversationsHeaderRight from "../../screens/Conversations/ConversationsHeaderRight";
import HeaderLeft from "../HeaderLeft";

export default ({ route }) => ({
    headerTitle : () => <HeaderTitle route={route}/>,
    headerShadowVisible : 'Visible',
    // headerTransparent: true,
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
        backgroundColor : 'green',
        height : 65,
        boxShadow : "2px solid black",
        // paddingTop : "20px"
        // borderBottomWidth: 0.2,
        // borderTopColor : '#e0f0f0',
        // elevation: 6,
       
        // marginTop: Platform.OS == "ios" ? 20 : 20
    },
      
    tabBarIcon: TabBarIcon,
    // headerStyle : {},

    tabBarActiveTintColor: '#122aa3',
    tabBarInactiveTintColor: 'gray',

    header: ({navigator, children }) => {
      let headerRight = <></>

      if(route.name == 'Home'){
        headerRight = <HomeHeaderRight/>
      } else if(route.name == 'Conversations') {
      // const title = children.name;
        headerRight = <ConversationsHeaderRight/>
      } 
      // console.log(route);

      return (
          <Box h="80px" bg="#fff" zIndex={-1} justifyContent="center" style={{
            // borderBottomWidth: 0.2,
            borderBottomColor : '#e0f0f0',
            position : "relative",
            elevation: 1,
            
            }}>
            <Stack h="80px" alignItems="center" justifyContent="center" direction="row">
              <Stack flexBasis="50%" h="80px"  alignItems="center" justifyContent="flex-start" direction="row">
                <HeaderLeft/>
                <HeaderTitle route={route}/>
              </Stack>
              <Stack flexBasis="50%" h="80px" justifyContent="center" alignItems="flex-end">
                { headerRight }
              </Stack>
            </Stack>
          </Box>
      );
  }
})