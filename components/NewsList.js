import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  ScrollView,
} from 'react-native'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'
import News from './News'
import { useSelector, useDispatch } from 'react-redux'
import { newsActions } from '../store/index'
import { KEY } from '@env'

function NewsList() {
  const [currentPage, setCurrentPage] = useState(1)
  const newsList = useSelector((state) => state.news.newsList)
  const dispatch = useDispatch()
  useEffect(() => {
    getData()
  }, [currentPage])
  const getData = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=keyword&apiKey=${KEY}&pageSize=5&page=${currentPage}`
    )
    dispatch(newsActions.setData(res.data.articles))
  }
  const loadMoreItems = () => {
    setCurrentPage(currentPage + 1)
  }
  return (
    <FlatList
      data={newsList}
      renderItem={(itemData) => {
        return (
          <News
            id={itemData.index}
            name={itemData.item.author}
            img={itemData.item.urlToImage}
            title={itemData.item.title}
          />
        )
      }}
      keyExtractor={(item, index) => {
        return index
      }}
      onEndReached={loadMoreItems}
      alwaysBounceVertical={false}
      onEndReachedThreshold={0.3}
    />
  )
}

export default NewsList
