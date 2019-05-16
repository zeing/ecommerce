import request from '../../utils/request'

export const user = {
  state: {
    token: null,
    customer: null,
  },
  reducers: {
    setToken(state, payload) {
      return {
        ...state,
        token: payload
      }
    },
    setCustomer(state, payload) {
      return {
        ...state,
        customer: payload
      }
    }
  },
  effects: (dispatch) => ({
    async login(payload, rootState) {
      try {
        const result = await request.post('/customers/tokens', {
          data: {
            ...payload,
            type: 'token'
          }
        })
        dispatch.user.setToken(result.data.data)
        dispatch.cart.getCartItemsAsync()
        return Promise.resolve()
      } catch (e) {
        return Promise.reject()
      }
    },
    async logout(payload, rootState) {
      await dispatch.cart.setCartId(null)
      await dispatch.user.setToken(null)
      await dispatch.cart.getCartItemsAsync()
    },
    async register(payload, rootState) {
      await request.post('/customers', {
        data: payload
      })
      const {
        email,
        password
      } = payload
      const result = await dispatch.user.login({
        email,
        password
      })
      return Promise.resolve()
    },
    async getUser(payload, rootState) {
      const {
        customer_id,
      } = rootState.user.token
      try {
        const result = await request.get(`/customers/${customer_id}`)
        const customer = result.data.data
        dispatch.user.setCustomer(customer)
        return Promise.resolve(customer)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  }),
  selectors: {
    isAuthenticated() {
      return (rootState, props) => rootState.user.token !== null
    }
  }
}