import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import { Alert, AppRegistry, Platform, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import HomeScreen from './HomeScreen'
import VoteScreen from './VoteScreen'
import PlayScreen from './PlayScreen'
import RCScreen from './RCScreen'
import FriendsScreen from './FriendsScreen'
import MyPageScreen from './MyPageScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Vote: VoteScreen,
    Play: PlayScreen,
    RC: RCScreen,
    Friends: FriendsScreen,
    MyPage: MyPageScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);


const PlayStack = createStackNavigator(
  {

      Play: PlayScreen,
    Home: HomeScreen,
    Vote: VoteScreen,
    RC: RCScreen,
    Friends: FriendsScreen,
    MyPage: MyPageScreen,
  },
  {
    initialRouteName: 'Play',
    headerMode: 'none'
  }
);

export default createAppContainer(createBottomTabNavigator(
  {

    Home: { screen: HomeScreen, navigationOptions:{tabBarVisible: false}},
    Play: { screen: PlayScreen },
    Vote: { screen: VoteScreen },
    'Royal Court': { screen: RCScreen },
    Friends: { screen: FriendsScreen },
    'My Page': { screen: MyPageScreen}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

      },
      initialRouteName: 'Play',
      headerMode: 'none'
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
));



// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
