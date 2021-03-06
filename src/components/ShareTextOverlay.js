import React from 'react'
import { StyleSheet } from 'react-native'

import Modal from './Modal'
import StyledInput from './StyledInput'
import BorderInput from './BorderInput'
import PrimaryButton from './PrimaryButton'
import Color from '../constants/Colors'

const ShareTextOverlay = ({ isVisible, toggleVisible, onSubmit }) => {
    return (
        <Modal
            isVisible={isVisible}
            toggleVisible={toggleVisible}
            title='Text Video'
        >
            {/* <StyledInput
                    light
                    placeholder='000 000 0000'
                    label='Enter Mobile Number'
                    keyboardType='numeric'
                /> */}
            <BorderInput
                keyboardType='numeric'
                autoFocus={true}
                placeholder='Enter Mobile Number'
            />
            <PrimaryButton
                style={styles.button}
                title='SEND TEXT'
                onPress={onSubmit}
            />
        </Modal>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 150,
        backgroundColor: Color.dark,
        alignSelf: 'center',
        height: 50,
        marginTop: 20,
    },
})

export default ShareTextOverlay
