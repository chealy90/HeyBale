import { View, Text, TextInput, Button } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react"
import { Picker } from '@react-native-picker/picker';

export default function OnboardingPage2(props){
    const [selectedEducation, setSelectedEducation] = useState("High School")


    return(
        <View>
            <View>
                <Text>Your City</Text>
                <TextInput
                    placeHolder="city"
                />
            </View>

            <View>
                <Text>Your Education</Text>
                <Picker
                    selectedValue={selectedEducation}
                    onValueChange={(value, index)=>{setSelectedEducation(value)}}
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
                <View>
                    <TextInput
                        placeholder="job"
                    />
                    <Text>At</Text>
                    <TextInput
                        placeholder="company"
                    />
                </View>
            </View>
        </View>
    )
}