import React from 'react'
import { storiesOf } from '@storybook/react-native'

import AppText from './AppText'

storiesOf('AppText')
  .add('Default', () => (
    <AppText>This is AppText</AppText>
  ))
