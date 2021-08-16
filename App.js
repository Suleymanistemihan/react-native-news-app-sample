import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen';



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationAction } from '@react-navigation/routers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import WelcomeScreen from "./src/screens/WelcomeScreen";
import DetailStack from './src/screens/Homescreen/StackScreen/DetailStack';
import ConventerScreen from "./src/screens/Conventer";
import TopTabTry from "./src/screens/CurrencyScreen/Try";
import TopTabUsd from "./src/screens/CurrencyScreen/Usd";
import TopTabEur from './src/screens/CurrencyScreen/Eur';
import HomeScreen from "./src/screens/Homescreen"
import { Transition } from 'react-native-reanimated';

const Bottom = createBottomTabNavigator();
function BottomTabs() {
  return (
    <Bottom.Navigator
      tabBarOptions={{
        style: { height: 40, backgroundColor: "white", },
        tabStyle: { justifyContent: "center", },
        activeTintColor: "#1DA1F2",
        inactiveTintColor: "grey",

      }}
    >
      <Bottom.Screen name="Home" component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={27} />

          ),

        }} />
      <Bottom.Screen name="Rates" component={MoneyScreen}
        options={{
          title: "Rates",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="signal" color={color} size={27} />
          ),
        }} />
      <Bottom.Screen name="Conventer" component={ConventerScreen}
        options={{
          title: "Conventer",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="currency-usd-circle" color={color} size={27} />
          ),
        }} />
    </Bottom.Navigator>
  )
}


const Tab = createMaterialTopTabNavigator();
function MoneyScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#1DA1F2',
        inactiveTintColor: 'grey',
        labelStyle: {
          fontSize: 20,
        },
        style: { backgroundColor: "white", }
      }}
    >
      <Tab.Screen name="Try" component={TopTabTry} />
      <Tab.Screen name="Usd" component={TopTabUsd} />
      <Tab.Screen name="Eur" component={TopTabEur} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: "horizontal",
            ...TransitionPresets.RevealFromBottomAndroid
          }}
        >
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen name="Home" component={BottomTabs}
            options={{
              title: "News App",
              headerTitleStyle: { color: "grey", justifyContent: "center", alignSelf: "center" },
              headerStyle: { backgroundColor: "white", height: 60 },
            }} />
          <Stack.Screen name="Detail" component={DetailStack} options={{
            headerTitleStyle: { color: "grey" },
            title: "News Detail",
            headerStyle: { backgroundColor: "white", height: 60 }
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}