import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Alert, AppRegistry, Platform, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class VoteScreen extends React.Component {
  render() {
    return (
            <View style={styles.background}>
                <Text style={styles.titleText}>VOTE</Text>
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
});
