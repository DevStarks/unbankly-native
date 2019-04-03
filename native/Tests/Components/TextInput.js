import { TextInput } from 'react-native'
import React from 'react'
import AppTextInput from '../../App/Components/TextInput'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

test('AppTextInput component renders correctly', () => {
  const tree = renderer.create(<AppTextInput onChangeText={() => {}} text='hi' />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('onChangeText', () => {
  let i = '' // i guess i could have used sinon here too... less is more i guess
  const onChangeText = () => { i = 'changed' }
  const wrapper = shallow(<AppTextInput onChangeText={onChangeText} />)

  expect(i).toBe('')
  wrapper.find(TextInput).simulate('changeText')
  expect(i).toBe('changed')
})
