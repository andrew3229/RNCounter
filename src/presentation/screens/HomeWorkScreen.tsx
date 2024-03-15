import { Text, View, StyleSheet } from 'react-native'
export const HomeWorkScreen = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.purpleBox]} />
            <View style={[styles.box, styles.orangeBox]} />
            <View style={[styles.box, styles.blueBox]} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row'
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        // flex: 1,

        // position: 'absolute', // Tarea 4
        // top: 0, // Tarea 4
        // right: 0 // Tarea 4
        // alignSelf: 'flex-end', // Tarea 3
        // top: 100
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        // flex: 1,
        top: 50
        // flex: 1 Tarea 1
       // alignSelf: 'center' //// Tarea 4
    },
    blueBox: {
        // flex: 3,
        backgroundColor: '#28C4D9',
        // width: '100%', // Tarea 2
        // alignSelf: 'center', // Tarea 3
        // position: 'absolute',
        // bottom: 0 // Tarea 4
    }

});