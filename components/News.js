import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
} from 'react-native'

function News({ name, img, title, id }) {
  const navigation = useNavigation()
  const navigationHandler = () => {
    console.log('pressed')
    navigation.push('Article', { index: id })
  }
  return (
    <TouchableHighlight onPress={navigationHandler}>
      <View style={styles.news}>
        <Image
          style={styles.img}
          source={{
            uri: `${img}`,
          }}
        />
        <View style={styles.content}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
            }}
          >
            {name}
          </Text>
          <Text>{title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  news: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#FFF',
    height: 150,
    borderRadius: 10,
  },
  img: {
    width: '44%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  content: {
    flex: 1,
    padding: 10,
  },
})

export default News
