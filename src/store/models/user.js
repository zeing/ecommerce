// import request from '../../utils/request'

export const user = {
  state: {
    isAuthenticated: false,
  },
  reducers: {
    setAuthenticated(state, payload) {
      return {
        ...state,
        isAuthenticated: payload
      }
    }
  },
  effects: (dispatch) => ({
    async login(payload, rootState) {
      if (payload.username === 'demo' && payload.password === 'password') {
        return dispatch.user.setAuthenticated(true)
      }
      return Promise.reject('Username or password not found')
    },
    async logout(payload, rootState) {
      dispatch.user.setAuthenticated(false)
    }
  })
}