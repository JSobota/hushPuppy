import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from './Loginform'

it('state of ajax request must be blank', () => {
  const component = shallow(<LoginForm />)
  expect(component.state().payload).toBe(null)
})

it('will initially have a blank name', () => {
  const component = shallow(<LoginForm />)
  expect(component.state().name).toBe("")
})

it('will initially have a blank password', () => {
  const component = shallow(<LoginForm />)
  expect(component.state().password).toBe("")
})

it('has two inputs', () => {
  const component = shallow(<LoginForm />)
  expect(component.find('form > input').length).toBe(2)
})

it('has a name input', () => {
  const component = shallow(<LoginForm />)
  expect(component.find('form > input[type="text"]').get(0).props.name).toBe('username')
})

it('has a password input', () => {
  const component = shallow(<LoginForm />)
  expect(component.find('form > input[type="password"]').get(0).props.name).toBe('password')
})
