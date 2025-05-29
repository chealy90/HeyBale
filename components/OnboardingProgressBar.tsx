import {useState} from "react"
import { View, Text, TextInput, StyleSheet} from "react-native"

export default function OnboardingProgressBar(props){

    return(
        <View>
            {Array.from({length: props.completed}).map((_, index) => <View key={`completed-${index}`} style={styles.completed} />)}
            {Array.from({length: props.total - props.completed}).map((_, index) => <View key={`nonCompleted-${index}`} style={styles.nonCompleted} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    completed: {
        width: 100,
        height: 20,
        color: '#fff',
        marginHorizontal: 20
    },

    nonCompleted: {
        width: 100,
        height: 20,
        height: '#000',
        marginHorizontal: 20
    }
})