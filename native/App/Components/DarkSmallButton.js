import React, { Component } from 'react'
import styles from './Styles/DarkSmallButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import SmallButton from './SmallButton'

ExamplesRegistry.addComponentExample('DarkSmallButton', () =>
  <DarkSmallButton
    text='small'
    onPress={() => window.alert('Your button was pressed')}
  />
)

class DarkSmallButton extends Component {
  // see SmallButton for prop info
  render () {
    return (
      <SmallButton
        {...this.props}
        textStyle={Object.assign({}, styles.buttonText, this.props.textStyle)}
        style={[styles.button, this.props.style]} />
    )
  }
}

export default DarkSmallButton
