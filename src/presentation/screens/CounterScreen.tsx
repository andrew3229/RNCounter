import { useState } from "react"
import { Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { PrimaryButton } from "../components"
import { Button } from "react-native-paper"




export const CounterScreen = () => {

    const [contador, setContador] = useState(0)

    const incrementarNumero = () => {
        setContador(contador + 1)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{contador}</Text>


            {/* <PrimaryButton 
                label="Incrementar"
                onPress={incrementarNumero}
                onLongPress={() => setContador(0)}
            /> */}

            <Button
                onPress={incrementarNumero}
                onLongPress={() => setContador(0)}
                mode="contained"
            >
                Incrementar
            </Button>


        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: 'bold'
    },
    // boton: {
    //     backgroundColor: Platform.OS === 'android' ? '#5856D6' : '#f0f0f0',
    //     paddingHorizontal: 20,
    //     paddingVertical: 10,
    //     borderRadius: 10,
    // },
    // botonText: {
    //     color: Platform.OS === 'android' ? 'white' : '#5856D6',
    // },
    // botonPressed: {
    //     backgroundColor: Platform.OS === 'android' ? '#47469F' : '#f0f0f0',
    // }
})