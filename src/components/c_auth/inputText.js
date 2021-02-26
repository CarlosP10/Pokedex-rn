import { Text, TextInput, View } from 'react-native'

import { Input } from 'react-native-elements'
import {PrimaryText} from '@common'
import React from 'react'
import styles from '../styles/c_auth/inputText'

const inputText = ({text}) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.mainContainer}>
                <PrimaryText style={styles.textStyle}>{text}: </PrimaryText>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputStyle} placeholder={text} placeholderTextColor='grey'/>
                </View>
            </View>
        </View>
    )
}

export default inputText
