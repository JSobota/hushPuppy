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
