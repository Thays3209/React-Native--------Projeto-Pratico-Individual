import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from "react-native";

import Home from "./app/pages/home";
import Login from "./app/pages/inputs/login";
import Avanco from "./app/pages/avanco";



const Tab = createBottomTabNavigator();
const Stack  = createStackNavigator();

function App() {
  createHomeNavi = () => (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor: '#ed170c'}}>

      <Tab.Screen name="Login" component={Login} 
      options={{tabBarLabel: 'Login', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} />),
    }}/>
      <Tab.Screen name="Avancos" component={Avanco} 
      options={{tabBarLabel: 'Avanços', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="chart-line" color={color} size={size} />),
    }}/>
      <Tab.Screen name="Home" component={Home} 
      options={{tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />),
    }}/>

    </Tab.Navigator>
    
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="" component={createHomeNavi} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Avancos" component={Avanco} /> 

  
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;