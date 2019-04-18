import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'
import NewLoanActions from '../../Redux/NewLoanRedux'
import Text from '../../Components/Text'
import ButtonInput from '../../Components/ButtonInput'
import NewLoanTemplate from './NewLoanTemplate'
import styles from './styles'

const ROLE_OPTIONS = [
  { id: 'borrower', name: 'borrower' },
  { id: 'lender', name: 'lender' }
]

const RoleScreen = React.memo((props) => {
  return (
    <NewLoanTemplate
      nextRoute='PartnerScreen'
      stepNumber={1}
      navigation={props.navigation}
      readyToAdvance={props.role}>

      <View style={styles.form}>
        <Text style={styles.question}>
          Are you the borrower or lender?
        </Text>

        <ButtonInput
          onSelect={(role) => props.updateNewLoan({ role })}
          value={props.role}
          options={ROLE_OPTIONS} />
      </View>
    </NewLoanTemplate>
  )
})

RoleScreen.propTypes = {
  role: PropTypes.string,
  updateNewLoan: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    role: state.newLoan.role
  }
}

export default connect(mapStateToProps, {
  updateNewLoan: NewLoanActions.updateNewLoan
})(RoleScreen)
