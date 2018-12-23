import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Alert, AppRegistry, Platform, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class PlayScreen extends React.Component {
  render() {
    return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Choose a Category</Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Comedy')}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Comedy</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Comedy')}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Adventure</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Comedy')}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Food</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black'
    },
    container: {
        flex: 2,
        paddingTop: 25,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
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
    titleText: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 60,
        color: 'blue',
        fontWeight: 'bold',
        paddingBottom: 50
    }
});
