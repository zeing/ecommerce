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
      dispatch.user.setAuthenticated(true)
    },
    async logout(payload, rootState) {
      dispatch.user.setAuthenticated(false)
    }
  })
}