import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Admin,AdminAuth,Regester} from '../screens';
import { Screen } from 'react-native-screens';
const stack = createNativeStackNavigator();

const RootNavigate = () => {
  return (
    <NavigationContainer>
      <stack.Navigator 
      
      // initialRouteName={""}
    
      screenOptions={{header:()=>null}}
      >
        <stack.Screen name="Loading" component={Regester} />
        <stack.Screen name="signin" component={AdminAuth} />
        <stack.Screen name="home" component={Admin} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigate;
