import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  newsList: [],
  username: null,
  isDark: false,
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true
      state.username = action.payload
    },
    setData(state, action) {
      const oldState = state.newsList
      state.newsList = [...oldState, ...action.payload]
      return state
    },
    toggleDarkMode(state) {
      state.isDark = !state.isDark
      return state
    },
  },
})

const store = configureStore({
  reducer: { news: newsSlice.reducer },
})

export const newsActions = newsSlice.actions
export default store
