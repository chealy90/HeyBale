import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from "react"
import {View, Text, TextInput, StyleSheet, Pressable} from "react-native"
import { useRouter } from "expo-router"
import OnboardingPage1 from "./onboardingFormPages/OnboardingPage1"
import OnboardingPage2 from "./onboardingFormPages/OnboardingPage2"
import OnboardingPage3 from "./onboardingFormPages/OnboardingPage3"
import OnboardingPage4 from "./onboardingFormPages/OnboardingPage4"

import OnboardingProgressBar from "../components/OnboardingProgressBar"



export default function Onboarding(){
    //check if logged in before demonstrating
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)

    const pages = {
        1: <OnboardingPage1 />,
        2: <OnboardingPage2 />,
        3: <OnboardingPage3 />,
        4: <OnboardingPage4 />
    }



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
        <View style={styles.onBoardingContainer}>
            <Text style={styles.pageHeader}>Tell us about you</Text>
            <OnboardingProgressBar completed={pageNumber} total={4}/>

            {pages[pageNumber]}
            <View>
                {pageNumber > 1 &&
                    <Pressable
                        onPress={()=>{setPageNumber(pageNumber - 1)}}
                    >
                        <Text>Prev</Text>
                    </Pressable>
                }

                <Pressable
                    onPress={()=>{setPageNumber(pageNumber + 1)}}
                >
                    <Text>{pageNumber == 4 ? "Finish" : "Next"}</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    onBoardingContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#FFF176',
        height: '100%'
    },

    pageHeader: {
        paddingTop: 100,
        justifySelf: 'flex-start',
        fontSize: 30,
        fontWeight: 'bold'
    }
})