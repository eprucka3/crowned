import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Alert, AppRegistry, Platform, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Dimensions, ScrollView, Image } from 'react-native';
import  { Video } from 'expo';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

export default class VoteScreen extends React.Component {

    state = {
		mute: false,
		fullScreen: false,
		shouldPlay: false,
        liked: false,
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

    toggleLike = () => this.setState(state => ({ liked: !state.liked }));

    render() {
     const { width } = Dimensions.get('window');

 return (
    <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePlayAndPause}>
                <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    shouldPlay={this.state.shouldPlay}
                    resizeMode="cover"
                    style={{ width, height: 300 }}
                    isMuted={this.state.mute}
                />
            </TouchableOpacity>
        <View style={styles.iconRow}>
            <TouchableOpacity onPress={this.toggleLike}>
                <Image
                    source= {this.state.liked ? require('./images/Heart.png') : require('./images/HeartOutline.png')}
                    style={styles.heartIcon}
                    resizeMode="cover"
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
        justifyContent: 'center'
    },
    iconRow: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    heartIcon: {
        width: 21,
        height: 20,
    },
});
