import React, { Component } from 'react'
import styles from './Styles/SmallButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import Button from './Button'

ExamplesRegistry.addComponentExample('SmallButton', () =>
  <SmallButton
    text='small'
    onPress={() => window.alert('Your button was pressed')}
  />
)

class SmallButton extends Component {
  // see Button for prop info
  render () {
    return (
      <Button {...this.props} style={[styles.smallButton, this.props.style]} />
    )
  }
}

export default SmallButton
