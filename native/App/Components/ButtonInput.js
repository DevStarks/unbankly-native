import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import Text from './Text'
import styles from './Styles/ButtonInputStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

ExamplesRegistry.addComponentExample('ButtonInput', () =>
  <ButtonInput>This is text</ButtonInput>
)

class ButtonInput extends Component {
  // For a complete list of props
  // https://facebook.github.io/react-native/docs/textinput.html#props

  static propTypes = {
    value: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.any,
        name: PropTypes.string
      })
    ).isRequired
  }

  onButtonPress (id) {
    return () => {
      this.setState({ selected: id })
      this.props.onSelect(id)
    }
  }

  renderButton (option, i) {
    const selected = this.props.value === option.id
    return (
      <TouchableOpacity
        key={i}
        activeOpacity={0.7}
        style={[styles.button, (selected ? styles.selected : {})]}
        onPress={this.onButtonPress(option.id)}>
        <Text style={styles.text}>{option.name}</Text>
      </TouchableOpacity>
    )
  }

  renderButtons () {
    return this.props.options.map(this.renderButton.bind(this))
  }

  render () {
    return (
      <View style={[styles.ButtonInput, this.props.style]}>
        {this.renderButtons()}
      </View>
    )
  }
}

export default ButtonInput
