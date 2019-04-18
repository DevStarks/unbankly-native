import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import Text from '../Components/Text'

// Styles
import styles from './Styles/LoanScreenStyles'

class LoanScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
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
