import { StyleSheet, View, Text, Image} from "react-native"

export default function Header(){
    return (
        <View style={styles.header}>
            <Image
                style={styles.logo}
                source={require('../assets/images/icons8-square-bale-48.png')}
            />
            <Text style={styles.name}>HeyBale</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        backgroundColor: '#FFF176',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    name: {
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 25,
        letterSpacing: 3
    },

    logo: {
        width: 35,
        marginLeft: 15
    }
})




