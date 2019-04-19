import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { View } from 'react-native'
import TextInput from './TextInput'
// import styles from './Styles/MoneyInput'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Ignore in coverage report
/* istanbul ignore next */

ExamplesRegistry.addComponentExample('MoneyInput', () =>
  <MoneyInput />
)

class MoneyInput extends Component {
  // For a complete list of props
  // https://facebook.github.io/react-native/docs/textinput.html#props

  static propTypes = {
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string
  }

  static defaultProps = {
    placeholder: '$0.00'
  }

  constructor (props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  isValidCurrency (str) {
    // matches numeric str beginning with $ and allows commas and 2 decimals
    return str.match(/^\$([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)?(.[0-9]?[0-9]?)?$/)
  }

  currencyToNumber (currencyValue) {
    return currencyValue.replace(/[$,]/g, '')
  }

  onChangeText (value) {
    if (this.isValidCurrency(value)) {
      this.setState({ value })
      this.props.onChangeText(this.currencyToNumber(value))
    }
  }

  onFocus () {
    if (!this.state.value) {
      this.setState({ value: '$' })
    }
  }

  onBlur () {
    if (this.state.value === '$') {
      this.setState({ value: null })
    }
  }

  render () {
    return (
      <TextInput
        {...this.props}
        value={this.state.value}
        onFocus={this.onFocus.bind(this)}
        onBlur={this.onBlur.bind(this)}
        style={this.props.style}
        onChangeText={this.onChangeText.bind(this)}
        placeholder={this.props.placeholder} />
    )
  }
}

export default MoneyInput
