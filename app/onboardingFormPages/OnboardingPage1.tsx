import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react"

export default function OnboardingPage1(props){
    const [showDatePicker, setShowDatePicker] = useState(false)


    return(
        <View style={styles.formItemsContainer}>
            <View style={styles.formItem}>
                <TextInput
                    value={props.formData.name}
                    onChangeText={value => props.setFormData({...props.formData, name: value})}
                    style={styles.textInputStyle}
                    mode='outlined'
                    label="Your Name"
                    outlineColor='#e8d629'
                    activeOutlineColor='#000'
                />
            </View>

            <View style={styles.dateFormItem}>
                <Text style={styles.formItemText}>Date of Birth</Text>

                <TouchableOpacity
                    style={styles.dateInputButton}
                    onPress={()=>{setShowDatePicker(true)}}
                >
                    <Text>{`${props.formData.dateOfBirth[2]}/${props.formData.dateOfBirth[1]}/${props.formData.dateOfBirth[0]}`}</Text>
                </TouchableOpacity>
            </View>
            {showDatePicker && <DateTimePicker
                                    value={new Date(props.formData.dateOfBirth[0], props.formData.dateOfBirth[1], props.formData.dateOfBirth[2])}
                                    onChange={value =>
                                    props.setFormData({...props.formData, dateOfBirth: [value.getYear(),
                                                                                        value.getMonth(),
                                                                                        value.getDate()]})}
                                />}


            <View style={styles.formItem}>
                <TextInput
                    value={props.formData.city}
                    onChangeText={value => props.setFormData({...props.formData, city: value})}
                    style={styles.textInputStyle}
                    mode='outlined'
                    label="Your City"
                    outlineColor='#e8d629'
                    activeOutlineColor='#000'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formItemsContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
    },

    formItem: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 20
    },

    dateFormItem: {
        borderWidth: 1,
        backgroundColor: '#fdfdfd',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 10
    },

    formItemText: {
        fontSize: 16,
        paddingHorizontal: 10,
        color: '#222'

    },

    textInputStyle: {
        width: 250,
        borderRadius: 10,

    },

    dateInputButton: {
        backgroundColor: '#e8d629',
        color: '#fff',
        borderRadius: 10,
        padding: 10
    }




})