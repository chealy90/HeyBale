import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from "react"
import {View, Text, TextInput} from "react-native"
import { useRouter } from "expo-router"
import OnboardingPage1 from "./onboardingFormPages/OnboardingPage1"
import OnboardingPage2 from "./onboardingFormPages/OnboardingPage2"


export default function Onboarding(){
    //check if logged in before demonstrating
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)
    useEffect(()=>{
        const checkLogin = async () => {
            try {
                const loggedIn = await AsyncStorage.getItem("loggedIn")
                if (loggedIn !== "true"){
                    router.replace("/Login")
                } else {
                    setIsLoading(false)
                }
            }
            catch (err) {
                console.log(err)
                router.replace("/Login")
            }
        }
        checkLogin()
    }, [])


    //form pages
    if (isLoading){
        return <Text>Loading...</Text>
    }



    return (
        <View>
            <Text>Tell us about you</Text>
            <OnboardingPage2 />
        </View>
    )
}