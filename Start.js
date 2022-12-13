import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Login from './components/Login'
import Home from './components/Home'
import { useSelector } from 'react-redux'
import Article from './components/Article'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function Start() {
  const isLoggedIn = useSelector((state) => state.news.isLoggedIn)

  if (!isLoggedIn) {
    return (
      <Stack.Navigator>
        {/* <View style={styles.container}> */}
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        {/* </View> */}
      </Stack.Navigator>
    )
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Article'
          component={Article}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )
  }
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
