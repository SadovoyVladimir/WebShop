import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/user.service'
import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'
import generateAuthError from '../utils/generateAuthError'

const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getUserId() },
      isLoggedIn: true
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false
    }

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersRequested: state => {
      state.isLoading = true
    },
    usersRecieved: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    usersRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    authRequestSuccess: (state, action) => {
      state.auth = action.payload
      state.isLoggedIn = true
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload
    },
    userLoggedOut: state => {
      state.entities = null
      state.isLoggedIn = false
      state.auth = null
    },
    userCreated: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = []
      }
      state.entities.push(action.payload)
    },
    authRequested: state => {
      state.error = null
    }
  }
})

const { reducer: usersReducer, actions } = usersSlice
const {
  usersRequested,
  usersRecieved,
  usersRequestFailed,
  authRequestSuccess,
  authRequestFailed,
  userLoggedOut,
  userCreated,
  authRequested
} = actions

export const signIn =
  ({ payload }) =>
  async dispatch => {
    const { email, password } = payload
    dispatch(authRequested())
    try {
      const data = await authService.login({ email, password })
      localStorageService.setTokens(data)
      dispatch(authRequestSuccess({ userId: data.userId }))
    } catch (error) {
      const { code, message } = error.response.data.error
      if (code === 400) {
        const errorMessage = generateAuthError(message)
        dispatch(authRequestFailed(errorMessage))
      } else {
        dispatch(authRequestFailed(error.message))
      }
    }
  }

export const signUp = payload => async dispatch => {
  dispatch(authRequested())
  try {
    const data = await authService.register(payload)
    localStorageService.setTokens(data)
    dispatch(authRequestSuccess({ userId: data.userId }))
    dispatch(userCreated(payload))
  } catch (error) {
    dispatch(authRequestFailed(error.message))
  }
}

export const logOut = () => dispatch => {
  localStorageService.removeAuthData()
  dispatch(userLoggedOut())
}

export const clearAuthError = () => dispatch => {
  dispatch(authRequested())
}

export const loadUsersList = () => async dispatch => {
  dispatch(usersRequested())
  try {
    const { content } = await userService.get()
    dispatch(usersRecieved(content))
  } catch (error) {
    dispatch(usersRequestFailed(error.message))
  }
}

export const getIsLoggedIn = () => state => state.users.isLoggedIn
export const getUsersLoadingStatus = () => state => state.users.isLoading
export const getCurrentUserId = () => state => state.users.auth.userId
export const getAuthErrors = () => state => state.users.error
export const getUserById = userId => state => {
  if (state.users.entities) {
    let findUser = {}
    for (const user of state.users.entities) {
      if (user._id === userId) {
        findUser = user
        break
      }
    }
    return findUser
  }
  return []
}

export default usersReducer
