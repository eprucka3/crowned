import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Alert, AppRegistry, Platform, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class HomeScreen extends React.Component {

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
      };

      async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }


  render() {

      const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {

    return (
            <View style={styles.background}>
                <Text style={styles.titleText}>CROWNED</Text>
                <View style={styles.container}>
                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Play')}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Play</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Vote')}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Vote</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Royal Court')}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Royal Court</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Friends')}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Friends</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.overlay}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('My Page')}>
                            <View style={styles.roundButton}>
                                <Text style={styles.buttonText}>My Page</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    );
  }
}
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: 'black',
        position: 'absolute',
        top: 200,
        left: 0,
        right: 0,
        bottom: 0
    },
    background: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    alternativeLayoutButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlay: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5e500',
        borderRadius: 10,
        borderWidth: 5,
        width: 150,
        height: 200,
        borderColor: 'blue'
    },
    roundButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5e500',
        borderRadius: 120,
        borderWidth: 5,
        width: 120,
        height: 120,
        borderColor: 'blue'
    },
    buttonText: {
        fontSize: 30,
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleText: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 60,
        color: 'blue',
        fontWeight: 'bold',
        paddingTop: 100
    }
});
