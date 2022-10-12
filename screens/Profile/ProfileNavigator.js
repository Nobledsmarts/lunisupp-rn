import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';
import Index from './Profile';

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Index} options={{ headerShown :false }}/>
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown :false }}/>
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown :false }}/>
        </Stack.Navigator>
    )
};
