import { useRouter, Link } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Button, TextInput, Text, StyleSheet, Pressable, Image   } from 'react-native'
import { useState } from "react"
import axios from "axios"


import Constants from 'expo-constants';
import * as Crypto from 'expo-crypto'

/*
    TODO give users option to show / hide password entries
*/


export default function Register(){
    const router = useRouter()
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [confirmPasswordInput, setConfirmPasswordInput] = useState('')
    const [errorMessages, setErrorMessages] = useState({password: [], email: []})

    const emailPattern: Regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/
    const digitPattern: Regex = /[0-9]+/
    const symbolPattern: Regex = /\W+/
    const {serverHostAddress} = Constants.expoConfig.extra

    //hash using the expo crypto hashing
    const hashPassword = async (password: string) => {
        const hash = await Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA256,
            passwordInput
        )
        return hash
    }

    function validateRegister(){
        let errors = {email: [], password: []}

        //check email
        if (!emailPattern.test(emailInput)){
            errors.email.push("Must be a valid email")
        }

        //check passwords are the same first
        if(passwordInput !== confirmPasswordInput){
            errors.password.push("Passwords must match")
        }
        //check password requirements
        else {
            //length
            if (passwordInput.length < 8){
                errors.password.push("Password must be at least eight characters.")
            }

            //digits
            if (!digitPattern.test(passwordInput)){
                errors.password.push("Password must contain at least one digit")

            }

            //symbol
            if (!symbolPattern.test(passwordInput)){
                errors.password.push("Password must contain at least one special character.")
            }
        }



        //create user in database
        if (Object.keys(errors).every(key => errors[key].length === 0))
        {
            hashPassword(passwordInput)
            .then(hash => {
                let reqBody = {"email": emailInput, "password": hash}
                console.log(reqBody)
                axios.post(`${serverHostAddress}/register`, reqBody)
                .then(res => {
                    console.log(res.status)
                    if (res.status){
                        //redirect to onboarding
                    }
                    else {
                        console.log(error)
                    }
                })
                .catch(error => {
                    //ChatGPT's detailed debugging steps
                    if (error.response) {
                      // The request was made and the server responded with a status code outside 2xx
                      console.error("🔴 Response Error:");
                      console.error("Status:", error.response.status);
                      console.error("Headers:", error.response.headers);
                      console.error("Data:", error.response.data);
                    } else if (error.request) {
                      // The request was made but no response was received
                      console.error("🟡 No Response Error:");
                      console.error("Request:", error.request);
                    } else {
                      // Something happened in setting up the request
                      console.error("⚠️ Axios Config Error:", error.message);
                    }

                    // Optional: Print the full error config for debugging
                    console.error("Axios config used:", error.config);
                });
            })


        }
        else {
            setErrorMessages(errors)
        }
    }




    return (
        <View style={styles.loginContainer}>
            <Image
                source={require('../assets/images/icons8-square-bale-48.png')}

            />
            <Text style={styles.loginHeader}>Create Your Account</Text>



            <View style={styles.formItemContainer}>
                <View style={styles.formItem}>

                    <TextInput
                        placeholder="email"
                        value={emailInput}
                        onChangeText={setEmailInput}
                    />
                </View>
                <Text style={styles.formItemError}>
                    {errorMessages.email.length > 0 ? errorMessages.email[0] : ""}
                </Text>
            </View>


            <View style={styles.formItemContainer}>
                <View style={styles.formItem}>
                    <TextInput
                        secureTextEntry={true}
                        placeholder="password"
                        value={passwordInput}
                        onChangeText={setPasswordInput}
                    />
                </View>
                <Text style={styles.formItemError}>
                    {errorMessages.password.length > 0 ? errorMessages.password[0] : ""}
                </Text>
            </View>


            <View style={styles.formItemContainer}>
                <View style={styles.formItem}>
                    <TextInput
                        secureTextEntry={true}
                        placeholder="confirm password"
                        value={confirmPasswordInput}
                        onChangeText={setConfirmPasswordInput}
                    />
                </View>
            </View>

            <Pressable
                style={styles.loginButton}
                onPress={validateRegister}
            >
                <Text style={styles.loginButtonText}>Create Account</Text>
            </Pressable>

            <View style={styles.callToSignUp}>
                <Text>Already have an account?</Text>
                <Link
                    href='Login'
                    style={styles.callToSignUpLink}
                >
                    Log in
                </Link>
            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    loginContainer: {
        width: '100%',
        backgroundColor: '#FFFEF7',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    loginHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 35
    },

    formItemContainer: {
        display: 'flex',
        width: '70%'
    },

    formItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'spaceAround',
        width: '100%',
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginVertical: 8
    },

    formItemError: {
        fontSize: 12,
        marginLeft: 10,
        marginBottom: 5
    },

    loginButton: {
        backgroundColor: '#e8d629',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 20,
    },

    loginButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    callToSignUp: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center'
    },

    callToSignUpLink: {
        fontWeight: 'bold',
        marginHorizontal: 8
    }


})