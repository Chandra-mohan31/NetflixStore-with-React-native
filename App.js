import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home";
import Edit from "./screens/Edit";
import Add from "./screens/Add";

const Stack = createStackNavigator();


const App = () => {
  return (
    
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
            name="Home"
            component={Home}
            options={{
              headerStyle:{
                backgroundColor:"#0f4c75"
              },
              title:'LCO netflix app',
              headerTitleStyle:{
                textAlign:"center",
                color:"white"
              }
            }}
            >

            </Stack.Screen>
            <Stack.Screen 
            name="Add"
            component={Add}
            options={{
              headerStyle:{
                backgroundColor:"#0f4c75"
              },
              title:'LCO netflix app',
              headerTitleStyle:{
                textAlign:"center",
                color:"white"
              }
            }}
            >

            </Stack.Screen>
            <Stack.Screen 
            name="Edit"
            component={Edit}
            options={{
              headerStyle:{
                backgroundColor:"#0f4c75"
              },
              title:'LCO netflix app',
              headerTitleStyle:{
                textAlign:"center",
                color:"white"
              }
            }}
            >

            </Stack.Screen>
         </Stack.Navigator>
      </NavigationContainer>
     
      
    
  );
}


export default App;


