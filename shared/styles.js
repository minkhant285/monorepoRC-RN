import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 35,
        fontFamily: 'Arial',
        marginBottom: 60,
        color: 'white'
    },
    input: {
        margin: 10,
        borderRadius: 15,
        color: 'black',
        fontSize: 16,
        paddingStart: 10,
        borderStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 0.5
    },
    footerLink: {
        color: 'blue',
    },
    footerText: {
        textAlign: "center",
        marginTop: 30
    },
    loginButton: {
        shadowColor: 'gray',
        shadowOpacity: 0.8,
        elevation: 6,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        margin: 10,
        padding: 10,
    }
}) 