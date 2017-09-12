import React from 'react'
import { shallow, mount } from 'enzyme'
import LoginForm from './Loginform'

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
  expect(component.find('#loginform > input').not('input[type="submit"]').length).toBe(2)
})
it('has a submit button', () => {
  const component = shallow(<LoginForm />)
  expect(component.find('#loginform > input').filter('input[type="submit"]').length).toBe(1)
})

it('has a name input', () => {
  const component = shallow(<LoginForm />)
  expect(component.find('#loginform > input[type="text"]').get(0).props.name).toBe('username')
})

it('has a password input', () => {
  const component = shallow(<LoginForm />)
  expect(component.find('#loginform > input[type="password"]').get(0).props.name).toBe('password')
})
