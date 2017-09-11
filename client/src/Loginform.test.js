import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from './Loginform'

it('state of ajax request must be blank', () => {
  const component = shallow(<LoginForm />)
  expect(component.state().payload).toBe(null)
});
