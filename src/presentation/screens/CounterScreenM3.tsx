import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, FAB } from "react-native-paper"
import { globalStyles } from "../../theme/global.styles"
import Icon from 'react-native-vector-icons/Ionicons'




export const CounterScreenM3 = () => {

    const [contador, setContador] = useState(0)

    return (
        <View style={globalStyles.cencerContainer}>
            <Text style={globalStyles.title}>{contador}</Text>

            <FAB
                style={globalStyles.fab}
                onPress={() => setContador(contador + 1)}
                onLongPress={() => setContador(0)}
                icon='add'
            />
        </View>
    )
}


