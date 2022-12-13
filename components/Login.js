import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { newsActions } from '../store/index'

export default function Login() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.news.isLoggedIn)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const loginHandler = () => {
    if (username.length >= 4 && password.length >= 4) {
      dispatch(newsActions.login(username))
    }
  }

  const usernameChangeHandler = (text) => {
    setUsername(text)
  }

  const passwordChangeHandler = (text) => {
    setPassword(text)
  }
  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        backgroundColor: '#FFB900',
      }}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.footer}>
        <TextInput
          onChangeText={usernameChangeHandler}
          style={styles.input}
          placeholder='Username'
        />
        <TextInput
          onChangeText={passwordChangeHandler}
          style={styles.input}
          secureTextEntry={true}
          placeholder='Password'
        />
        <TouchableHighlight style={styles.button} onPress={loginHandler}>
          <View>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 28,
    height: 50,
    width: '70%',
    margin: 12,
    backgroundColor: '#F5F5F5',
    padding: 13,
    fontSize: 16,
    fontWeight: 'medium',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'center',
  },
  header: {
    flex: 0.4,
    justifyContent: 'center',
    width: '100%',
    height: 200,
  },
  footer: {
    backgroundColor: '#FFF',
    flex: 0.6,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 28,
    color: '#FFF',
    fontSize: 16,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
