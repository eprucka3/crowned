import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Alert, AppRegistry, Platform, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Dimensions } from 'react-native';
import  { Video } from 'expo';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

export default class RCScreen extends React.Component {

    state = {
		mute: false,
		fullScreen: false,
		shouldPlay: false,
	}

	handlePlayAndPause = () => {
		this.setState(prevState => ({
			shouldPlay: !prevState.shouldPlay
		}));
	}

	handleVolume = () => {
		this.setState(prevState => ({
			mute: !prevState.mute,
		}));
	}

    render() {
     const { width } = Dimensions.get('window');

 return (
   <View style={styles.container}>
         <View>
             <TouchableOpacity onPress={this.handlePlayAndPause}>
                     <Video
                         source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                         shouldPlay={this.state.shouldPlay}
                         resizeMode="cover"
                         style={{ width, height: 300 }}
                         isMuted={this.state.mute}
                     />
            </TouchableOpacity>
        </View>
    </View>
     );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    controlBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    }
});
