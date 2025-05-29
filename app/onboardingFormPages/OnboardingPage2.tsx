import { View, Text, Button, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"
import Slider from '@react-native-community/slider'
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react"
import { Picker } from '@react-native-picker/picker';

export default function OnboardingPage2(props){
    const [selectedEducation, setSelectedEducation] = useState("High School")


    return(
        <View style={styles.formItemsContainer}>
            <View style={styles.sliderFormItem}>
                <Text style={styles.labelStyle}>Your Height</Text>
                <View style={styles.sliderContainer}>
                    <Text style={{fontSize: 15}}>30</Text>
                    <Slider
                        style={{width:250, height:60}}
                        minimumValue={18}
                        maximumValue={80}
                        tapToSeek={true}
                    />
                </View>
            </View>

            <View>
                <Text style={styles.labelStyle}>Your Education</Text>
                <Picker
                    selectedValue={selectedEducation}
                    onValueChange={(value, index)=>{setSelectedEducation(value)}}
                    placeholder="Your Education"
                    style={styles.educationFormItem}
                >

                    <Picker.Item label="High School" value="High School"/>
                    <Picker.Item label="Associate's Degree" value="Associate's Degree"/>
                    <Picker.Item label="Undergraduate" value="Undergraduate"/>
                    <Picker.Item label="Post Grad" value="Post Grad"/>
                    <Picker.Item label="PhD" value="PhD"/>
                    <Picker.Item label="Trade School" value="Trade School"/>
                </Picker>
            </View>


            <View>
                <Text>Your Work</Text>
                <View style={styles.employmentFormItem}>
                    <TextInput
                        style={styles.employmentTextInput}
                        mode='outlined'
                        label="Job"
                    />
                    <Text style={{fontWeight: 'bold'}}>At</Text>
                    <TextInput
                        style={styles.employmentTextInput}
                        mode='outlined'
                        label="Company"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formItemsContainer: {
        display: 'flex',
        justifyContent: 'flex-start'
    },

    labelStyle: {
        fontSize: 15
    },

    sliderFormItem: {
        display: 'flex',
    },

    sliderContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    formItem: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 20
    },



    educationFormItem: {
        marginVertical: 15,
        backgroundColor: '#fff',
        borderWidth: 1,
    },

    employmentFormItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    employmentTextInput: {
        width: 120
    }
})