import React from 'react'
import styles from './Styles/SmallButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import Button from './Button'

ExamplesRegistry.addComponentExample('SmallButton', () =>
  <SmallButton
    text='small'
    onPress={() => window.alert('Your button was pressed')}
  />
)

const SmallButton = React.memo((props) => {
  return (
    <Button {...props} style={[styles.smallButton, props.style]} />
  )
})

export default SmallButton
