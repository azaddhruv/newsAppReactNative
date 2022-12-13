import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  Linking,
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { useSelector } from 'react-redux'

const Article = ({ route }) => {
  const { index } = route.params
  const isDark = useSelector((state) => state.news.isDark)
  const news = useSelector((state) => state.news.newsList[index])
  const readMoreHandler = () => {
    Linking.openURL(`${news.url}`)
  }
  return (
    <View style={isDark ? [styles.article, styles.dark] : styles.article}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={{
            uri: `${news.urlToImage}`,
          }}
        />
        <View
          style={isDark ? [styles.headerText, styles.dark] : styles.headerText}
        >
          <Text style={styles.author}>{news.author}</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              color: `${isDark ? '#FEFEFE' : 'black'}`,
            }}
          >
            {news.title}
          </Text>
        </View>
      </View>
      <View
        style={isDark ? [styles.body, styles.dark, styles.border] : styles.body}
      >
        <Text
          style={{
            fontSize: 27,
            fontWeight: '500',
            color: `${isDark ? '#FEFEFE' : 'black'}`,
          }}
        >
          <Ionicons name='newspaper-outline' size={27} /> Content :
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '500',
            color: `${isDark ? '#FEFEFE' : 'black'}`,
          }}
        >
          {news.description}
        </Text>
      </View>
      <TouchableHighlight style={styles.button} onPress={readMoreHandler}>
        <View>
          <Text style={styles.buttonText}>Read More</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  article: {
    flex: 1,
    backgroundColor: '#FFB900',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  header: {
    flex: 0.6,
    position: 'relative',
  },
  headerText: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#FFF',
    width: '90%',
    padding: 5,
    marginLeft: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    opacity: 0.9,
  },
  author: {
    fontSize: 35,
    color: '#FFB900',
    fontWeight: '900',
    display: 'flex',
    opacity: 1,
    // justifyContent: 'flex-start',
  },
  body: {
    marginTop: -10,
    flex: 0.35,
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 22,
  },
  button: {
    display: 'flex',
    flex: 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    width: '96%',
    margin: 5,
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
  dark: {
    backgroundColor: '#1E1E1E',
  },
  darkColor: {
    color: '#FEFEFE',
  },
  border: {
    borderWidth: 1,
    borderColor: '#FEFEFE',
  },
})

export default Article
