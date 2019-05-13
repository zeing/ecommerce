import React from 'react'
import { Box, Form, Button, FormField, Heading } from 'grommet'

class CheckoutForm extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    company_name: '',
    phone_number: '',
    line_1: '',
    line_2: '',
    city: '',
    postcode: '',
    county: '',
    country: '',
    instructions: '',
  }

  onChangeValue = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <Form onSubmit={() => this.props.onSubmit(this.state)}>
        <Box>
          <Heading level={3}>Your Info</Heading>

          <FormField name="name" label="Name" onChange={this.onChangeValue} />
          <FormField name="email" label="Email" onChange={this.onChangeValue} />
        </Box>
        <Box>
          <Heading level={3}>Shipping Address</Heading>

          <FormField name="first_name" label="First Name" onChange={this.onChangeValue}/>
          <FormField name="last_name" label="Last Name" onChange={this.onChangeValue}/>
          <FormField name="company_name" label="Company Name" onChange={this.onChangeValue}/>
          <FormField name="phone_number" label="Phone Number" onChange={this.onChangeValue}/>
          <FormField name="line_1" label="Address 1" onChange={this.onChangeValue}/>
          <FormField name="line_2" label="Address 2" onChange={this.onChangeValue}/>
          <FormField name="city" label="City" onChange={this.onChangeValue}/>
          <FormField name="postcode" label="Postcode" onChange={this.onChangeValue}/>
          <FormField name="county" label="County/Region/State" onChange={this.onChangeValue}/>
          <FormField name="country" label="Country" onChange={this.onChangeValue}/>
          <FormField name="instructions" label="Instruction" onChange={this.onChangeValue}/>
        </Box>
        <Box>
          <Button primary type="submit" label="Checkout" />
        </Box>
      </Form>
    )
  }
}

export default CheckoutForm
