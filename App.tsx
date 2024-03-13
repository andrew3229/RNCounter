import { SafeAreaView, Text } from "react-native"
import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"
import { CounterScreen } from "./src/presentation/screens/CounterScreen"
import { PaperProvider } from "react-native-paper"
import { CounterScreenM3 } from './src/presentation/screens/CounterScreenM3';

import IonIcon from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (
    <PaperProvider
      settings={{ icon: (props) => <IonIcon {...props} /> }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name="Andres Camacho"/> */}
        {/* <CounterScreen /> */}
        <CounterScreenM3 />
      </SafeAreaView>
    </PaperProvider>
  )
}