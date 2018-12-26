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
import ComedyScreen from './ComedyScreen'
import PlayVideoScreen from './src/screens/PlayVideoScreen';
import RecordVideoScreen from './src/screens/RecordVideoScreen';


export default createAppContainer(createBottomTabNavigator(
  {

    Home: { screen: HomeScreen, navigationOptions:{tabBarVisible: false}},
    Play: { screen: PlayScreen },
    Vote: { screen: VoteScreen },
    'Royal Court': { screen: RCScreen },
    Friends: { screen: FriendsScreen },
    'My Page': { screen: MyPageScreen},
    Comedy: { screen: ComedyScreen},
    Record: { screen: RecordVideoScreen},
    Video: { screen: PlayVideoScreen}
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
