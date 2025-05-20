import { ScrollView,
        Text,
         View,
         Image,
         StyleSheet,
         Pressable, Button} from "react-native"


import React, {useRef, useState} from "react"
import { LinearGradient } from 'expo-linear-gradient';


import Header from "Header"



export default function SwipeCard(props){
    const [swiping, setSwiping] = useState(false);
    const [swipeOffset, setSwipeOffset] = useState(0)



    return (
            <View
                style={{ transform: [{ translateX: swipeOffset }] }}
            >
                {/*  Main Section  */}
                <View style={styles.mainSection}>
                    <Image
                        style={styles.userImage}
                        source={{uri: props.user.image}}
                    />
                    <LinearGradient
                        style={styles.userMainInfo}
                        colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0)']}
                        start={{ x: 0.5, y: 1 }}
                        end={{ x: 0.5, y: 0 }}
                    >
                        <Text style={[styles.primaryHeading, swiping && {color: '#000'}]}>
                            {props.user.name}, {props.user.age}
                        </Text>


                        <View style={styles.infoLine}>
                            <Image
                                style={styles.infoLineLogo}
                                source={require('../assets/images/icons8-map-pin-20.png')}
                            />
                            <Text style={styles.infoLineText}>
                                {props.user.location}
                            </Text>
                        </View>


                        <View style={styles.infoLine}>
                            <Image
                                style={styles.infoLineLogo}
                                source={require('../assets/images/icons8-briefcase-20.png')}
                            />
                            <Text style={styles.infoLineText}>
                                {props.user.occupation} at {props.user.company}
                            </Text>

                        </View>
                    </LinearGradient>
                </View>

                {/*  Extra Info Section  */}
                <View style={styles.extraInfoSection}>
                    {/*  Bio   */}
                    <Text style={styles.bio}>{props.user.bio}</Text>

                    {/*  About   */}
                    <Text style={styles.aboutHeader}>About {props.user.name}</Text>
                    <View style={styles.profileBubblesContainer}>
                        <View style={styles.profileInfoBubble}>
                            <Text>{props.user.height}cm</Text>
                        </View>


                        <View style={styles.profileInfoBubble}>
                            <Text>{props.user.smoker ? "Smoker" : "Non-smoker"}</Text>
                        </View>

                        <View style={styles.profileInfoBubble}>
                            <Text>{props.user.drinker}</Text>
                        </View>


                        <View style={styles.profileInfoBubble}>
                            <Text>{props.user.seeking}</Text>
                        </View>


                        <View style={styles.profileInfoBubble}>
                            <Text>{props.user.education}</Text>
                        </View>
                    </View>
                </View>

                {/* Interests and hobbies */}

                <View style={styles.extraInfoSection}>
                    <Text style={styles.aboutHeader}>{props.user.name}'s Interests</Text>
                    <View style={styles.profileBubblesContainer}>
                        {props.user.interests.map((interest, index) =>
                            <View style={styles.profileInfoBubble} key={index}>
                                <Text>{interest}</Text>
                            </View>
                        )}
                    </View>
                </View>
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
