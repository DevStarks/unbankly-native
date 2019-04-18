import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import { Images } from '../../Themes'
import Text from '../../Components/Text'
import SmallButton from '../../Components/SmallButton'
import DarkSmallButton from '../../Components/DarkSmallButton'
import styles from './styles'

const NewLoanTemplate = React.memo((props) => {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.logoThumb} source={Images.logoThumb} />

      <Text style={styles.title}>
        New Loan Setup: Step {props.stepNumber} of 6
      </Text>

      <Image source={Images.squirrel} resizeMode='cover' />

      {props.children}

      <View style={styles.navigation}>
        <DarkSmallButton
          style={styles.button}
          onPress={props.navigation.goBack}
          text='Back' />

        <SmallButton
          style={styles.button}
          disabled={!props.readyToAdvance}
          onPress={() => props.navigation.navigate(props.nextRoute)}
          text='Next' />
      </View>
    </View>
  )
})

NewLoanTemplate.propTypes = {
  nextRoute: PropTypes.string.isRequired,
  stepNumber: PropTypes.number.isRequired,
  navigation: PropTypes.object.isRequired,
  readyToAdvance: PropTypes.bool.isRequired
}

export default NewLoanTemplate
