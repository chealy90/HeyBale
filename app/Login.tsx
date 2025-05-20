import { useRouter, Link } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Button, TextInput, Text, StyleSheet, Pressable, Image   } from 'react-native'
import { useState } from "react"

export default function Login(){
    const router = useRouter()
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')




    return (
        <View style={styles.loginContainer}>
            <Image
                source={require('../assets/images/icons8-square-bale-48.png')}

            />
            <Text style={styles.loginHeader}>Login to Your Account</Text>

            <View style={styles.formItem}>

                <TextInput
                    placeholder="user@domain.com"
                    value={emailInput}
                    onChangeText={setEmailInput}
                />
            </View>

            <View style={styles.formItem}>
                <TextInput
                    secureTextEntry={true}
                    placeholder="password"
                    value={passwordInput}
                    onChangeText={setPasswordInput}
                />
            </View>

            <Pressable
                style={styles.loginButton}
            >
                <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>

            <View style={styles.callToSignUp}>
                <Text>Don't have an account?</Text>
                <Link
                    href=''
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

    formItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'spaceAround',
        width: '70%',
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginVertical: 8
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