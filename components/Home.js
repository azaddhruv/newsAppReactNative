import React, { useState } from 'react'
import axios from 'axios'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native'
import NewsList from './NewsList'
import { useSelector, useDispatch } from 'react-redux'
import { newsActions } from '../store/index'
import Ionicons from '@expo/vector-icons/Ionicons'

function Home() {
  const dispatch = useDispatch()
  const isDark = useSelector((state) => state.news.isDark)
  const username = useSelector((state) => state.news.username)
  const toggleDarkMode = () => {
    dispatch(newsActions.toggleDarkMode())
  }
  return (
    <SafeAreaView style={isDark ? [styles.home, styles.dark] : styles.home}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
      >
        <Text style={styles.title}>News</Text>
        <TouchableHighlight onPress={toggleDarkMode}>
          <Ionicons
            name='bulb-outline'
            color={isDark && 'white'}
            size={38}
            fontWeight={'bold'}
          />
        </TouchableHighlight>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: `${isDark ? 'white' : 'black'}`,
          }}
        >
          <Ionicons
            name='person-circle-outline'
            size={30}
            color={isDark ? 'white' : 'black'}
          />{' '}
          {username}
        </Text>
      </View>
      <NewsList />
      <StatusBar style='light' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    padding: 15,
    paddingTop: 40,
    backgroundColor: '#FFB900',
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 6,
  },
  dark: {
    backgroundColor: 'black',
  },
})

export default Home
