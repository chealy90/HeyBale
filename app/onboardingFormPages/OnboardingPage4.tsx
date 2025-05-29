import { useState } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"


export default function OnboardingPage4(){


    return (
        <View style={styles.formItemsContainer}>
              <Text>Create a Bio</Text>
              <Text>Tell other users about yourself and your goals. Focus on positives!</Text>
              <TextInput style={styles.bioInput}/>
        </View>
    )
}

const styles = StyleSheet.create({
    formItemsContainer: {
        display: 'flex',
        justifyContent: 'flex-start'
    },

    bioInput: {
        width: 300,
        height: 200,
        backgroundColor: '#eee'
    }
})