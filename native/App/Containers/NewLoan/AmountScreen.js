import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'
import NewLoanActions from '../../Redux/NewLoanRedux'
import Text from '../../Components/Text'
import MoneyInput from '../../Components/MoneyInput'
import NewLoanTemplate from './NewLoanTemplate'
import styles from './styles'

const AmmountScreen = React.memo((props) => {
  return (
    <NewLoanTemplate
      nextRoute='AmountScreen'
      stepNumber={3}
      navigation={props.navigation}
      readyToAdvance={props.amount}>

      <View style={styles.form}>
        <Text style={styles.question}>
          What's the loan amount?
        </Text>

        <MoneyInput
          onChangeText={(amount) => props.updateNewLoan({ amount })}
          value={props.amount}
        />
      </View>
    </NewLoanTemplate>
  )
})

AmmountScreen.propTypes = {
  amount: PropTypes.string,
  updateNewLoan: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    amount: state.newLoan.amount
  }
}

export default connect(mapStateToProps, {
  updateNewLoan: NewLoanActions.updateNewLoan
})(AmmountScreen)
