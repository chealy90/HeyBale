import { ScrollView, Text } from "react-native"
import Header from "../../components/Header"


export default function swipeScreen(){
    return (
        <ScrollView>
            <Header />
            <Text>Profile Page</Text>
        </ScrollView>
    )
}
