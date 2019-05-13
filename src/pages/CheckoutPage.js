/* eslint-disable no-restricted-globals */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import CartItemList from '../components/CartItemList'
import CheckoutForm from '../components/CheckoutForm'
import PaymentModal from '../components/PaymentModal'

class CheckoutPage extends Component {
  state = {
    showModal: false
  }

  componentDidMount() {
    this.props.getCartItems()
  }

  onSubmit = () => {
    // const { history } = this.props
    const ans = confirm('Are you sure ?')
    // history.push('/payment')
    if (ans) {
      // request checkout api (moltin)
      this.setState({ showModal: true })
    }
  }

  render() {
    const { showModal } = this.state
    return (
      <Box
        direction="row"
        pad="small"
        margin="small"
      >
        <Box width="medium">
          <CartItemList />
        </Box>
        <Box flex>
          <CheckoutForm onSubmit={this.onSubmit} />
        </Box>
        {
          showModal && <PaymentModal setShow={(showModal) => this.setState({ showModal })} />
        }
      </Box>
    )
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems
})

const mapDispatchToProps = (dispatch) => ({
  getCartItems: dispatch.cart.getCartItemsAsync
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
