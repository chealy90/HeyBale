import { useState } from "react"
import { KeyboardAvoidingView, View, Text, TextInput, StyleSheet } from "react-native"


export default function OnboardingPage4(props){


    return (
        <KeyboardAvoidingView style={styles.formItemsContainer}>
              <Text>Create a Bio</Text>
              <Text>Tell other users about yourself and your goals. Focus on positives!</Text>
              <TextInput style={styles.bioInput}
                    value={props.formData.bio}
                    onChangeText={value=>{props.setFormData({...props.formData, bio: value})}}
              />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    formItemsContainer: {
        display: 'flex',
        justifyContent: 'flex-start'
    },

    bioInput: {
        width: 300,
        height: 100,
        backgroundColor: '#eee',
        display: 'flex',
        alignItems: 'flex-start'
    }
})