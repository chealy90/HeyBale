import { View, Text, TextInput, Button, StyleSheet } from "react-native"
import Slider from '@react-native-community/slider'
import { useState } from "react"
import { RadioButton } from "react-native-paper"

export default function OnboardingPage3(props){
    return(
        <View style={styles.formItemsContainer}>
            <Text>Your Values</Text>
            <View>
                <Text>Drinker?</Text>
                <RadioButton.Group>
                    <View style={styles.radioGroupStyles}>
                        <View>
                            <Text>Yes</Text>
                            <RadioButton value="Yes"/>
                        </View>

                        <View>
                            <Text>Sometimes</Text>
                            <RadioButton value="Sometimes"/>
                        </View>

                        <View>
                            <Text>Never</Text>
                            <RadioButton value="Never"/>
                        </View>
                    </View>
                </RadioButton.Group>
            </View>


             <View>
                <Text>Smoker?</Text>
                <RadioButton.Group>
                    <View style={styles.radioGroupStyles}>
                        <View>
                            <Text>Yes</Text>
                            <RadioButton value="Yes"/>
                        </View>

                        <View>
                            <Text>Sometimes</Text>
                            <RadioButton value="Sometimes"/>
                        </View>

                        <View>
                            <Text>Never</Text>
                            <RadioButton value="Never"/>
                        </View>
                    </View>
                </RadioButton.Group>
            </View>



             <View>
                <Text>Social Style?</Text>
                <RadioButton.Group>
                    <View style={styles.radioGroupStyles}>
                        <View>
                            <Text>Introvert</Text>
                            <RadioButton value="Introvert"/>
                        </View>

                        <View>
                            <Text>Extrovert</Text>
                            <RadioButton value="Extrovert"/>
                        </View>

                        <View>
                            <Text>Ambivert</Text>
                            <RadioButton value="Ambivert"/>
                        </View>
                    </View>
                </RadioButton.Group>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    formItemsContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
    },

    radioGroupStyles: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#eee',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15
    }
})