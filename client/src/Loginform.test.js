import React from 'react'
import { shallow, mount } from 'enzyme'
import LoginForm from './Loginform'

describe('Initial State.', () => {
  it('should have a blank name', () => {
    const component = shallow(<LoginForm />)
    expect(component.state().name).toBe("")
  })

  it('should have a blank password', () => {
    const component = shallow(<LoginForm />)
    expect(component.state().password).toBe("")
  })
})

describe('Rendering' , () => {
  it('should have two inputs', () => {
    const component = shallow(<LoginForm />)
    expect(component.find('#loginform > input').not('input[type="submit"]').length).toBe(2)
  })

  it('should have a submit button', () => {
    const component = shallow(<LoginForm />)
    expect(component.find('#loginform > input').filter('input[type="submit"]').length).toBe(1)
  })

  it('should have a name input', () => {
    const component = shallow(<LoginForm />)
    expect(component.find('#loginform > input[type="text"]').get(0).props.name).toBe('username')
  })

  it('should have a password input', () => {
    const component = shallow(<LoginForm />)
    expect(component.find('#loginform > input[type="password"]').get(0).props.name).toBe('password')
  })
})


describe('Input', () => {
  it('should change state when you type a name', () => {
    const component = mount(<LoginForm />)
    const nameInput = component.find('input[type="text"]')
    nameInput.node.value = "Cool!"
    nameInput.simulate('change', nameInput)
    expect(component.state('name')).toBe("Cool!")
  })

  it('should change state when you type a password', () => {
    const component = mount(<LoginForm />)
    const passInput = component.find('input[type="password"]')
    passInput.node.value = "hunter2"
    passInput.simulate('change', passInput)
    expect(component.state('password')).toBe('hunter2')
  })
})
