import { ScrollView,
        Text,
         View,
         Image,
         StyleSheet,
         Pressable, Button} from "react-native"


import React, {useRef, useState} from "react"
import { LinearGradient } from 'expo-linear-gradient';


import Header from "../../components/Header"
import SwipeCard from "../../components/SwipeCard"



export default function swipeScreen(){
    const [userIndex, setUserIndex] = useState(0)

    const users = [
        {
            name: "Brian",
            age: 32,
            location: "Dublin",
            occupation: "Software Developer",
            company: "Amazon",
            height: 176,
            smoker: false,
            drinker: "Occasional",
            seeking: "Long Term",
            education: "Undergraduate",
            image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
            bio: 'Just a regular person who loves good conversation, pizza, and weekend adventures. Looking to meet someone genuine and kind. Let’s keep it simple and see where things go.',
            interests: ['Video Games', 'Hiking', 'Craft Beer', 'Rock Music']
        },
        {
            name: "Jim",
            age: 30,
            location: "Drogheda",
            occupation: "Network Engineer",
            company: "Cisco",
            height: 169,
            smoker: true,
            drinker: "Yes",
            seeking: "Long Term Open to Short",
            education: "Postgraduate",
            image: 'https://th.bing.com/th/id/OIP.PL0l_X0zaHw2On68A0KN-AHaET?rs=1&pid=ImgDetMain',
            bio: 'Fluent in sarcasm, lover of dogs, and always down for tacos 🌮. Weekend adventurer, weekday Netflix connoisseur. Looking for someone who can match my energy and laugh at my bad jokes. Bonus points if you love coffee and can beat me at Mario Kart.',
            interests: ['Anime', 'Dogs', 'Mexican Food']
        }

    ]


    function swipeRight(){
        console.log("swipe right")
        setUserIndex((userIndex + 1) % users.length)
    }

    function swipeLeft(){
        console.log("swipe left")
        setUserIndex((userIndex + 1) % users.length)
    }




    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <Header />
                <SwipeCard user={users[userIndex]}/>
            </ScrollView>

            {/* Yes Button */}
            <Pressable
                onPress={()=>{
                    swipeRight()
                }}
                style={[styles.buttonStyles, {right: 50}]}
            >
                <Image
                    source={require('../../assets/images/tickArrow.png')}
                />
            </Pressable>


            {/* No Button */}
            <Pressable
                onPress={()=>{
                    swipeLeft()
                }}
                style={[styles.buttonStyles, {left: 50}]}
            >
                <Image
                    source={require('../../assets/images/crossMark.png')}
                />
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    // main section
    mainSection: {
        width: '90%',
        margin: 'auto',

        position: 'relative'

    },



    userImage: {
        width: '100%',
        aspectRatio: 9 / 16,
        borderRadius: 5,
        marginHorizontal: 'auto',
        borderRadius: 5
    },

    userMainInfo: {
        position: 'absolute',
        bottom: 0,


        width: '100%',
        paddingBottom: 30,
        paddingLeft: 20,
        paddingTop: 50,
        marginHorizontal: 'auto'

    },

    primaryHeading: {
        fontSize: 30,
        color: '#fff'
    },

    infoLine: {
        color: '#fff',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },

    infoLineLogo: {
        marginRight: 10
    },

    infoLineText: {
        color: '#fff'
    },

    //extra info section
    extraInfoSection: {
        width: '90%',
        marginHorizontal: 'auto'
    },

    bio: {
        width: '100%',
        minHeight: 100,
        height: 'minContent',
        backgroundColor: '#FFF176',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 25,
        fontSize: 16,
        marginHorizontal: 'auto',
        marginTop: 20,
        lineHeight: 22
    },


    aboutHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 25,
        marginLeft: 15,
        marginBottom: 10
    },

    profileBubblesContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'spaceBetween',
        paddingVertical: 10
    },


    profileInfoBubble: {
        borderColor: '#000',
        borderRadius: 5,
        borderWidth: 0,
        backgroundColor: '#FFF176',
        fontWeight: 'bold',
        display: 'flex',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 5
    },


    buttonStyles: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        width: 60,
        height: 60,
        color: '#fff',
        backgroundColor: '#e8d629',

        borderRadius: '50%'
    }
})
