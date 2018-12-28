import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Alert, AppRegistry, Platform, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import {Permissions } from 'expo';

export default class ComedyScreen extends React.Component {

  render() {
    return (

            <View style={styles.background}>
                <Text style={styles.titleText}>Challenge: Celebrity Imitation</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Record')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Take Video</Text>
                    </View>
                </TouchableOpacity>
            </View>

    );
  }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    titleText: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 20,
        color: 'yellow',
        fontWeight: 'bold',
        paddingTop: 100
    },
    button: {
        backgroundColor: '#e5e500',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'blue',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
        },
        buttonText: {
            fontSize: 30,
            color: 'blue',
            fontWeight: 'bold',
            textAlign: 'center'
        },
});
