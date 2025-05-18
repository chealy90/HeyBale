import { ScrollView,
        Text,
         View,
         Image,
         StyleSheet } from "react-native"

import { LinearGradient } from 'expo-linear-gradient';


import Header from "../../components/Header"


export default function swipeScreen(){
    return (
        <ScrollView>
            <Header />
            <View>
                {/*  Main Section  */}
                <View style={styles.mainSection}>
                    <Image
                        style={styles.userImage}
                        source={{uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'}}
                    />
                    <LinearGradient
                        style={styles.userMainInfo}
                        colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0)']}
                        start={{ x: 0.5, y: 1 }}
                        end={{ x: 0.5, y: 0 }}
                    >
                        <Text style={styles.primaryHeading}>
                            Brian, 32
                        </Text>


                        <View style={styles.infoLine}>
                            <Image
                                style={styles.infoLineLogo}
                                source={require('../../assets/images/icons8-map-pin-20.png')}
                            />
                            <Text style={styles.infoLineText}>
                                Dublin
                            </Text>
                        </View>


                        <View style={styles.infoLine}>
                            <Image
                                style={styles.infoLineLogo}
                                source={require('../../assets/images/icons8-briefcase-20.png')}
                            />
                            <Text style={styles.infoLineText}>
                                Software Engineer at Amazon
                            </Text>

                        </View>
                    </LinearGradient>
                </View>

                {/*  Extra Info Section  */}
                <View style={styles.extraInfoSection}>
                    <Text style={styles.bio}>
                        Just a regular person who loves good conversation, pizza, and weekend adventures. Looking to meet someone genuine and kind. Let’s keep it simple and see where things go.
                    </Text>
                    <Text style={styles.aboutHeader}>About Brian</Text>
                    <View style={styles.profileBubblesContainer}>
                        <View style={styles.profileInfoBubble}>
                            <Text>176cm</Text>
                        </View>


                        <View style={styles.profileInfoBubble}>
                            <Text>Non Smoker</Text>
                        </View>

                        <View style={styles.profileInfoBubble}>
                            <Text>Occasional Drinker</Text>
                        </View>


                        <View style={styles.profileInfoBubble}>
                            <Text>Long Term</Text>
                        </View>


                        <View style={styles.profileInfoBubble}>
                            <Text>Undergraduate</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
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
        color: '#000',
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

    }
})
