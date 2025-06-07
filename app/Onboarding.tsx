import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from "react"
import {View, Text, TextInput, StyleSheet, Pressable} from "react-native"
import { useRouter } from "expo-router"

import Header from "../components/Header"

import OnboardingPage1 from "./onboardingFormPages/OnboardingPage1"
import OnboardingPage2 from "./onboardingFormPages/OnboardingPage2"
import OnboardingPage3 from "./onboardingFormPages/OnboardingPage3"
import OnboardingPage4 from "./onboardingFormPages/OnboardingPage4"
import OnboardingPage5 from "./onboardingFormPages/OnboardingPage5"

import OnboardingProgressBar from "../components/OnboardingProgressBar"
import Constants from 'expo-constants';
const {serverHostAddress} = Constants.expoConfig.extra
import axios from "axios"



export default function Onboarding(){
    //check if logged in before demonstrating
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)

    const [formData, setFormData] = useState({
            name: '',
            dateOfBirth: [1970, 1, 1],
            city: '',
            height: 175,
            education: 'Highschool',
            jobTitle: '',
            company: '',
            drinkerStatus: 'Never',
            smokerStatus: 'Never',
            socialStyle: 'Ambivert',
            bio: '',
            imagePaths: ["", "", "", "", "", ""],
            imageData: ["", "", "", "", "", ""]
        })



    const pages = {
        1: <OnboardingPage1 formData={formData} setFormData={setFormData}/>,
        2: <OnboardingPage2 formData={formData} setFormData={setFormData}/>,
        3: <OnboardingPage3 formData={formData} setFormData={setFormData}/>,
        4: <OnboardingPage4 formData={formData} setFormData={setFormData}/>,
        5: <OnboardingPage5 formData={formData} setFormData={setFormData}/>,

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



    const sendData = async () => {
        try {
            const email = await AsyncStorage.getItem('email')
            axios.post(`${serverHostAddress}/setUserInfo/${email}`, formData)
            .then(res => {
                if (res.data){
                    console.log(res.data)
                }
                else {
                    console.log(res)
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
        catch (err) {
            console.log(err)
        }

    }


    //form pages
    if (isLoading){
        return <Text>Loading...</Text>
    }



    return (
        <View style={styles.onBoardingContainer}>
            <Header />
            <Text style={styles.pageHeader}>Tell us about you</Text>
            <OnboardingProgressBar completed={pageNumber} total={4}/>

            {pages[pageNumber]}
            <View style={styles.buttonsContainer}>
                {pageNumber > 1 &&
                    <Pressable
                        style={styles.buttonStyle}
                        onPress={()=>{setPageNumber(pageNumber - 1)}}
                    >
                        <Text style={{fontWeight: 'bold'}}>Prev</Text>
                    </Pressable>
                }

                <Pressable
                    style={styles.buttonStyle}
                       onPress={pageNumber==5 ? sendData : ()=>{setPageNumber(pageNumber + 1)}}
                >
                    <Text style={{fontWeight: 'bold'}}>{pageNumber == 5 ? "Finish" : "Next"}</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    onBoardingContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',

        backgroundColor: '#FFF',
        height: '100%'
    },

    pageHeader: {
        paddingTop: 100,
        justifySelf: 'flex-start',
        fontSize: 30,
        fontWeight: 'bold'
    },

    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '80%',
        paddingTop: 10
    },

    buttonStyle: {
        backgroundColor: '#e8d629',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 7

    }
})