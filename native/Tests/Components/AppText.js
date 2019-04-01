import 'react-native'
import React from 'react'
import AppText from '../../App/Components/AppText'
import renderer from 'react-test-renderer'

test('AppText component renders correctly', () => {
  const tree = renderer.create(<AppText>This is text</AppText>).toJSON()
  expect(tree).toMatchSnapshot()
})
