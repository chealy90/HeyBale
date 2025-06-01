import { View, Text, Button, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"
import Slider from '@react-native-community/slider'
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react"
import { Picker } from '@react-native-picker/picker';

export default function OnboardingPage2(props){
    const [selectedEducation, setSelectedEducation] = useState("High School")
    const [localHeightValue, setLocalHeightValue] = useState(props.formData.height)


    return(
        <View style={styles.formItemsContainer}>
            <View style={styles.sliderFormItem}>
                <Text style={styles.labelStyle}>Your Height</Text>
                <View style={styles.sliderContainer}>
                    <Text style={{fontSize: 15}}>{props.formData.height}cm</Text>
                    <Slider
                        style={{width:250, height:60}}
                        value={props.formData.height}
                        minimumValue={50}
                        maximumValue={200}
                        tapToSeek={true}
                        onValueChange={value => {setLocalHeightValue(Math.round(value))}}
                        onSlidingComplete={value => props.setFormData({ ...props.formData, height: Math.floor(value) })}
                    />
                </View>
            </View>

            <View>
                <Text style={styles.labelStyle}>Your Education</Text>
                <Picker
                    selectedValue={props.formData.education}
                    onValueChange={(value, index)=>{props.setFormData({...props.formData, education: value})}}
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
                        onChangeText={value => props.setFormData({...props.formData, jobTitle: value})}
                        value={props.formData.jobTitle}
                        mode='outlined'
                        label="Job"
                    />
                    <Text style={{fontWeight: 'bold'}}>At</Text>
                    <TextInput
                        style={styles.employmentTextInput}
                        mode='outlined'
                        label="Company"
                        value={props.formData.company}
                        onChangeText={value => props.setFormData({...props.formData, company: value})}
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