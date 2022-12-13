import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
// import Login from './components/Login'
import { Provider, useSelector } from 'react-redux'
import store from './store/index'
import Start from './Start'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Start />
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB900',
  },
})
