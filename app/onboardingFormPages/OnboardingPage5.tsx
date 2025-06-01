import { useState } from "react"
import {View, Text, Button, Image, StyleSheet } from "react-native"

import EditableImageContainer from "../../components/EditableImageContainer"

export default function OnboardingPage5(props){




    return (
        <View style={styles.formItemsContainer}>
            <Text>Add some photos</Text>
            <View style={styles.imagesContainer}>

            {
                Array.from({length: 6}).map((_, index) => <EditableImageContainer
                                                            key={index}imagePath=""
                                                            index={index}

                                                            formData={props.formData}
                                                            setFormData={props.setFormData}
                                                           />)
            }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formItemsContainer: {
        width: '90%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    imagesContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }


})