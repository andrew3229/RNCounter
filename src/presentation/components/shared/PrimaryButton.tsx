import { Platform, Pressable, StyleSheet, Text, View } from "react-native"


interface Props {
    label?: string,
    onPress?: () => void,
    onLongPress?: () => void

}



export const PrimaryButton = ({ label = '', onPress, onLongPress }: Props) => {
    return (
        <View>
            <Pressable
                onPress={() => onPress && onPress()}
                onLongPress={() => onLongPress && onLongPress()}
                style={({ pressed }) => [styles.boton, pressed && styles.botonPressed]}
            >
                <Text style={styles.botonText}>{label}</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    boton: {
        backgroundColor: Platform.OS === 'android' ? '#5856D6' : '#f0f0f0',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    botonText: {
        color: Platform.OS === 'android' ? 'white' : '#5856D6',
    },
    botonPressed: {
        backgroundColor: Platform.OS === 'android' ? '#47469F' : '#f0f0f0',
    }
})