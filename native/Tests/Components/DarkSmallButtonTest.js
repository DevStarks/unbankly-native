import 'react-native'
import React from 'react'
import DarkSmallButton from '../../App/Components/DarkSmallButton'
import renderer from 'react-test-renderer'

test('DarkSmallButton component renders correctly', () => {
  const tree = renderer.create(<DarkSmallButton onPress={() => {}} text='hi' />).toJSON()
  expect(tree).toMatchSnapshot()
})
