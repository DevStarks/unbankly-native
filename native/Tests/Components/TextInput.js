import 'react-native'
import React from 'react'
import TextInput from '../../App/Components/TextInput'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

test('TextInput component renders correctly', () => {
  const tree = renderer.create(<TextInput onChangeText={() => {}} text='hi' />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('onChangeText', () => {
  let i = '' // i guess i could have used sinon here too... less is more i guess
  const onChangeText = () => { i = 'changed' }
  const wrapperPress = shallow(<TextInput onChangeText={onChangeText} />)

  expect(wrapperPress.prop('onChangeText')).toBe(onChangeText) // uses the right handler
  expect(i).toBe('')
  wrapperPress.simulate('changeText')
  expect(i).toBe('changed')
})
