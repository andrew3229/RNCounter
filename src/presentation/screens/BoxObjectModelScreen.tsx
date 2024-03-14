import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"

export const BoxObjectModelScreen = () => {
    return (
        <View style={style.container}>
            {/* <Text style={style.title}>BoxObjectModelScreen</Text> */}
            <View style={style.purpleBox}></View>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',

    },
    title: {
        fontSize: 30,
        borderWidth: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    purpleBox: {
        // flex: 1,
        marginHorizontal: 20,
        marginVertical: 20,
        height: 100,
        backgroundColor: '#5856D6',

    }
})