import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'
import NewLoanActions from '../../Redux/NewLoanRedux'
import Text from '../../Components/Text'
import TextInput from '../../Components/TextInput'
import NewLoanTemplate from './NewLoanTemplate'
import styles from './styles'

const PartnerScreen = React.memo((props) => {
  return (
    <NewLoanTemplate
      nextRoute='AmountScreen'
      stepNumber={2}
      navigation={props.navigation}
      readyToAdvance={props.partnerName && props.partnerEmail}>

      <View style={styles.form}>
        <Text style={styles.question}>
          Who are you borrowing from?
        </Text>

        <TextInput
          onChangeText={(partnerName) => props.updateNewLoan({ partnerName })}
          value={props.partnerName}
          placeholder='Full Name'
        />

        <TextInput
          style={styles.bottomInput}
          onChangeText={(partnerEmail) => props.updateNewLoan({ partnerEmail })}
          value={props.partnerEmail}
          placeholder='Email Address'
        />
      </View>
    </NewLoanTemplate>
  )
})

PartnerScreen.propTypes = {
  partnerName: PropTypes.string,
  partnerEmail: PropTypes.string,
  updateNewLoan: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    partnerName: state.newLoan.partnerName,
    partnerEmail: state.newLoan.partnerEmail
  }
}

export default connect(mapStateToProps, {
  updateNewLoan: NewLoanActions.updateNewLoan
})(PartnerScreen)
