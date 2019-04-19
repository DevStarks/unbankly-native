import React from 'react'
import MoneyInput from '../../App/Components/MoneyInput'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import renderer from 'react-test-renderer'

test('MoneyInput component renders correctly', () => {
  const tree = renderer.create(<MoneyInput onChangeText={() => {}} placeholder='$1.00' />).toJSON()
  expect(tree).toMatchSnapshot()
})
// it calls onnChangeText without punctuation
// it doesn't call onChangeText with invald input
describe('onChangeText', () => {
  test('calls props.onChangeText', () => {
    const onChangeText = sinon.fake()
    const wrapper = shallow(<MoneyInput onChangeText={onChangeText} />)

    wrapper.simulate('changeText', '$1')

    expect(onChangeText.called).toBe(true)
  })

  test('passes number with commas/$ removed to props.onChangeText', () => {
    const onChangeText = sinon.fake()
    const wrapper = shallow(<MoneyInput onChangeText={onChangeText} />)

    wrapper.simulate('changeText', '$1,211.12')

    expect(onChangeText.calledWith('1211.12')).toBe(true)
  })

  test('doesnt call props.onChangeText when input is non currency', () => {
    const onChangeText = sinon.fake()
    const wrapper = shallow(<MoneyInput onChangeText={onChangeText} />)

    wrapper.simulate('changeText', 'bad')

    expect(onChangeText.called).toBe(false)
  })
})

test('onFocus sets state.value', () => {
  const wrapper = shallow(<MoneyInput onChangeText={() => {}} />)

  wrapper.simulate('focus')

  expect(wrapper.state().value).toBe('$')
})

test('onBlur nulls value', () => {
  const wrapper = shallow(<MoneyInput onChangeText={() => {}} />)

  wrapper.simulate('focus')
  wrapper.simulate('blur')

  expect(wrapper.state().value).toBe(null)
})
