import { View, Text, TextInput, Button } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react"

export default function OnboardingPage1(props){
    const [showDatePicker, setShowDatePicker] = useState(false)


    return(
        <View>
            <View>
                <Text>Your Name</Text>
                <TextInput
                    placeHolder="name"
                />
            </View>

            <View>
                <Text>Your Date of Birth</Text>
                <Button
                    title="11/12/2002"
                    onPress={()=>{setShowDatePicker(true)}}
                />
            </View>
            {showDatePicker && <DateTimePicker value={new Date()}/>}
        </View>
    )
}