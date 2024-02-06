/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

 import React from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 import Login from './src/Login';
 import Home from './src/Home';
import MobileLogin from './src/MobileLogin';
import OtpLogin from './src/OtpLogin';
 
 const Stack = createStackNavigator();
 
 const App = () =>  {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="MobileLogin">
         <Stack.Screen 
         name="MobileLogin" 
         component={MobileLogin} 
         options={{
           headerShown: false, // Hide the header
         }}/>
         <Stack.Screen 
         name="OtpLogin" 
         component={OtpLogin} 
         options={{
           headerShown: false, // Hide the header
         }}/>
         <Stack.Screen 
         name="Home" 
         component={Home}
         options={{
           headerShown: false,
       //  // if you want to hide header title but not back button    
       //     headerTitle: '', // Set an empty string for the title
       //     headerStyle: {
       //       height: 0, // Set the height to 0 to hide the entire header
       //     },
         }}
         />
       </Stack.Navigator>
     </NavigationContainer>
   //  <View>
   //   <Login/>
   //  </View>
   );
 }
 
 export default App;
 