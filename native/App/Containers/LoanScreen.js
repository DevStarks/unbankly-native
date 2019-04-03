import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
// import Button from '../Components/Button'
import Text from '../Components/AppText'
// import TextInput from '../Components/TextInput'
// import Link from '../Components/Link'

// Styles
import styles from './Styles/LoanScreenStyles'

class LoanScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // action: 'SIGN UP',
      // email: '',
      // password: ''
    }
    this.navigateToNewLoanIfNone()
  }

  navigateToNewLoanIfNone () {
    if (_.isEmpty(this.props.loans)) {
      this.props.navigation.replace('NewLoanScreen')
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Text>
          Loans
        </Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { })(LoanScreen)
