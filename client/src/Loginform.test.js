import React from 'react'
import { shallow, mount } from 'enzyme'
import LoginForm from './Loginform'
import axios from 'axios'

axios.post = jest.fn(url => Promise.resolve())

axios.get = jest.fn(url => Promise.resolve(() => ({ fake: '' })))

describe('Initial State.', () => {
  it('should have a blank name', () => {
    const component = shallow(<LoginForm />)
    expect(component.state().name).toBe('')
  })

  it('should have a blank password', () => {
    const component = shallow(<LoginForm />)
    expect(component.state().password).toBe('')
  })
})

describe('Rendering', () => {
  it('should have two inputs', () => {
    const component = mount(<LoginForm />)
    component.setState({ loading: false })
    expect(
      component.find('#loginform > input').not('input[type="submit"]').length
    ).toBe(2)
  })

  it('should have a submit button', () => {
    const component = mount(<LoginForm />)
    component.setState({ loading: false })
    expect(
      component.find('#loginform > input').filter('input[type="submit"]').length
    ).toBe(1)
  })

  it('should have a name input', () => {
    const component = mount(<LoginForm />)
    component.setState({ loading: false })
    expect(component.find('#loginform > input[type="text"]').props().name).toBe(
      'username'
    )
  })

  it('should have a password input', () => {
    const component = mount(<LoginForm />)
    component.setState({ loading: false })
    expect(
      component.find('#loginform > input[type="password"]').props().name
    ).toBe('password')
  })
})

describe('Input', () => {
  it('should change state when you type a name', () => {
    const component = mount(<LoginForm />)
    component.setState({ loading: false })
    const nameInput = component.find('input[type="text"]')
    nameInput.get(0).value = 'Cool!'
    nameInput.simulate('change', nameInput)
    expect(component.state('name')).toBe('Cool!')
  })

  it('should change state when you type a password', () => {
    const component = mount(<LoginForm />)
    component.setState({
      loading: false
    })
    const passInput = component.find('input[type="password"]')
    passInput.get(0).value = 'hunter2'
    passInput.simulate('change', passInput)
    expect(component.state('password')).toBe('hunter2')
  })
})

describe.skip('Submit', () => {
  const component = mount(<LoginForm />)
  const button = component.find('input[type="submit"]')
  component.instance().sendLogin = jest.fn()
  component.simulate('click', button)
  expect(component.instance().sendLogin).toHaveBeenCalledTimes(1)
})
