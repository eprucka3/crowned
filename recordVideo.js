import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    isCameraReady: false,
    isRecording: false
  };

  flip = () => this.setState({
      type: this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    });

    toggleRecording =  () => this.setState(state => ({
        isRecording: !state.isRecording}
    ));


    setCameraReady: () => () => ({ isCameraReady: true});

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {

      onStartRecording: props => async () => {
        if (props.isCameraReady) {
          props.setState({ isRecording: true, fileUrl: null });
          props.setVideoDuration();
          props.cameraRef.recordAsync({ quality: '4:3' })
            .then((file) => {
              props.setState({ fileUrl: file.uri });
            });
        }
    };
    onStartRecording: props => async () => {
  if (props.isCameraReady) {
    props.setState({ isRecording: true, fileUrl: null });
    props.setVideoDuration();
    props.cameraRef.recordAsync({ quality: '4:3' })
      .then((file) => {
        props.setState({ fileUrl: file.uri });
      });
  }
};



    const { hasCameraPermission } = this.state;
    const { width, height } = Dimensions.get('window');

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ width: width, height: height}}
            type={this.state.type}
            onCameraReady={this.setCameraReady}
            ref={(ref) => {this.camera = ref}}>
            <View style={styles.background}>
              <TouchableOpacity style={styles.button} onPress={this.flip}>
                <Text style={styles.buttonText}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.background}>
              <TouchableOpacity style={styles.button} onPress={this.toggleRecording}>
                <Text style={styles.buttonText}>
                  {' '}Record{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <Image
                source= {this.state.isRecording ? require('./images/Heart.png') : require('./images/HeartOutline.png')}
                style={styles.heartIcon}
                resizeMode="cover"
            />
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white'
    }
})
