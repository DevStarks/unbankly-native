import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import ButtonInput from './ButtonInput'

storiesOf('ButtonInput', module)
  .add('Default', () => (
    <View style={{ backgroundColor: 'black' }}>
      <ButtonInput
        options={[{id: 1, name: 'Option 1'}, {id: 2, name: 'Option 2'}]}
        onPress={() => { }}
      />
    </View>
  ))
  .add('Selected', () => (
    <View style={{ backgroundColor: 'black' }}>
      <ButtonInput
        options={[{id: 1, name: 'Unselected'}, {id: 2, name: 'Selected'}]}
        onPress={() => { }}
        value={2}
      />
    </View>
  ))
