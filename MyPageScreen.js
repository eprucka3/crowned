import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Alert, AppRegistry, Platform, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class MyPageScreen extends React.Component {
  render() {
    return (
            <View style={styles.background}>
                <Text style={styles.titleText}>MY PAGE</Text>
                <Text style={styles.otherText}>Update my profile picture</Text>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 60,
        color: 'yellow',
        fontWeight: 'bold',
        paddingTop: 100
    }
    otherText: {
        flex: 2,
        justify content: 'left',
        alignItems: 'left',
        fontSize: 40,
        color: 'red'
        fontWeight: 'bold'
        paddingTop: 100
    }
});
