import React, { Component } from 'react'
import { Layer, Button, Box } from 'grommet'
import { withRouter } from 'react-router-dom'

class PaymentModal extends Component {
  payNow = () => {
    const { setShow } = this.props
    window.open('https://www.google.com','_blank');
    setShow(false)
  }

  cod = () => {
    const { setShow } = this.props
    setShow(false)
  }

  render() {
    const { setShow } = this.props
    return (
      <Layer
        onEsc={() => setShow(false)}
        onClickOutside={() => setShow(false)}
      >
        <Box pad="medium">
          <Box pad="small">
            <Button primary label="Pay Now" onClick={this.payNow} />
          </Box>
          <Box pad="small">
            <Button label="Cash on develivery" onClick={this.cod} />
          </Box>
        </Box>
      </Layer>
    )
  }
}

export default withRouter(PaymentModal)
