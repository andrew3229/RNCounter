import { Text, View, StyleSheet } from 'react-native'
export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1} />
            <View style={styles.box2} />
            <View style={styles.box3} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    box1: {
        flex: 1,

        backgroundColor: '#5856D6',

    },
    box2: {
        flex: 2,
        backgroundColor: '#F0A23B',
    },
    box3: {
        flex: 1,
        backgroundColor: '#50E3C2',
    }

});