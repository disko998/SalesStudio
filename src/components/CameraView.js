import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Camera } from 'expo-camera'
import Color from '../constants/Colors'

export default CameraView = React.forwardRef(
    ({ isRecording, duration, ...props }, ref) => {
        const [counter, setCounter] = React.useState(duration)

        React.useEffect(() => {
            console.log(isRecording)
            if (isRecording) {
                counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
            } else {
                setCounter(duration)
            }
        }, [counter, isRecording])

        return (
            <Camera
                style={styles.camera}
                {...props}
                ref={ref}
                ratio='16:9'
                autoFocus={Camera.Constants.AutoFocus.on}
                whiteBalance={Camera.Constants.WhiteBalance.auto}
                videoStabilizationMode={
                    Camera.Constants.VideoStabilization.auto
                }
                onMountError={err => {
                    alert(err.message)
                }}
            >
                <View style={styles.overlay}>
                    <View style={styles.frame} />
                    <Text style={styles.timer}>{`Time Remaining: ${
                        counter < 10 ? `0${counter}` : counter
                    } sec`}</Text>
                </View>
            </Camera>
        )
    },
)

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: '5%',
    },
    camera: { flex: 1 },
    frame: {
        flex: 1,
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderStyle: 'dotted',
        borderColor: Color.white,
        borderRadius: 1,
    },
    timer: {
        color: Color.white,
        textAlign: 'center',
        fontFamily: 'roboto-700',
        fontSize: 17,
        marginBottom: 10,
    },
})
