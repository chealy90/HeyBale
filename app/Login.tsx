import { useRouter, Link } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Button, TextInput, Text, StyleSheet, Pressable, Image   } from 'react-native'
import { useState } from "react"
import axios from "axios"
import Constants from 'expo-constants';
import * as Crypto from 'expo-crypto'
const {serverHostAddress} = Constants.expoConfig.extra

export default function Login(){
    const router = useRouter()
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const [errorMessages, setErrorMessages] = useState({email: [], password: [], loginAttempt: []})
    const emailPattern: Regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/

    const hashPassword = async (password: string) => {
        const hash = await Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA256,
            passwordInput
        )
        return hash
    }


    function validateLogin(){
        let errors = {email: [], password: [], loginAttempt: []}
        //email
        if (emailInput === ""){
            errors.email.push("Please enter an email")
        }
        else if (!emailPattern.test(emailInput)){
            errors.email.push("Please enter a valid email")
        }

        //password
        if (passwordInput === ""){
            errors.password.push("Please enter a password")
        }

        //ensure no form errors before sending request
        if (Object.keys(errors).every(key => errors[key].length === 0)){
            hashPassword(passwordInput)
            .then(hash => {
                let reqBody = {"email": emailInput, "password": hash}
                axios.post(`${serverHostAddress}/login`, reqBody)
                .then(res => {

                    if (!res.data.errorMessage){
                        //success, redirect
                        console.log("this far ok")
                        try {
                            console.log(res.data)
                            AsyncStorage.multiSet([["loggedIn", "true"],
                                                ["email", res.data.email],
                                                ["userInfo", JSON.stringify(res.data)]])
                            .then(()=>{router.replace("/Onboarding")})


                        }
                        catch (err) {
                            console.log(err)
                        }

                    }

                })
                .catch(error => {
                    console.log("error: ", error)
                    setErrorMessages({email: [], password: [], loginAttempt: [error.response.data.errorMessage]})
                    setPasswordInput('')
                })

            })

        }
        else {
            //display form error message to user
            setErrorMessages(errors)

        }





    }



    return (
        <View style={styles.loginContainer}>
            <Image
                source={require('../assets/images/icons8-square-bale-48.png')}

            />
            <Text style={styles.loginHeader}>Login to Your Account</Text>

            <View style={styles.formItemContainer}>
                <View style={styles.formItem}>
                    <TextInput
                        placeholder="user@domain.com"
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

            <Pressable
                style={styles.loginButton}
                onPress={validateLogin}
            >
                <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>

            <Text style={styles.formItemError}>
                {errorMessages.loginAttempt.length > 0 ? errorMessages.loginAttempt[0] : ""}
            </Text>

            <View style={styles.callToSignUp}>
                <Text>Don't have an account?</Text>
                <Link
                    href='Register'
                    style={styles.callToSignUpLink}
                >
                    Sign Up
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