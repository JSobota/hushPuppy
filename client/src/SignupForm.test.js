import React from 'react'
import { shallow, mount } from 'enzyme'
import SignupForm from './SignupForm'

describe('Initial State.', () => {
  it('should have a blank first name', () => {
    const component = shallow(<SignupForm />)
    expect(component.state().firstName).toBe("")
  })

  it('should have a blank last name', () => {
    const component = shallow(<SignupForm />)
    expect(component.state().lastName).toBe("")
  })

  it('should have a blank email', () => {
    const component = shallow(<SignupForm />)
    expect(component.state().email).toBe("")
  })

  it('should have a blank password', () => {
    const component = shallow(<SignupForm />)
    expect(component.state().password).toBe("")
  })
})

describe('Rendering' , () => {
  it('should have four inputs', () => {
    const component = shallow(<SignupForm />)
    expect(component.find('#loginform > input').not('input[type="submit"]').length).toBe(4)
  })

  it('should have a submit button', () => {
    const component = shallow(<SignupForm />)
    expect(component.find('#loginform > input').filter('input[type="submit"]').length).toBe(1)
  })

  it('should render the first name input first', () => {
    const component = shallow(<SignupForm />)
    expect(component.find('#loginform > input[type="text"]').get(0).props.name).toBe('firstName')
  })

  it('should render the last name input second', () => {
    const component = shallow(<SignupForm />)
    expect(component.find('#loginform > input[type="text"]').get(1).props.name).toBe('lastName')
  })

  it('should render the email input third', () => {
    const component = shallow(<SignupForm />)
    expect(component.find('#loginform > input[type="text"]').get(2).props.name).toBe('email')
  })

  it('should have a password input last', () => {
    const component = shallow(<SignupForm />)
    expect(component.find('#loginform > input[type="password"]').get(0).props.name).toBe('password')
  })
})

describe('Inputs', () => {
  it('should change state when you type a first name', () => {
    const component = mount(<SignupForm />)
    const firstNameInput = component.find('input[name="firstName"]')
    firstNameInput.get(0).value = "Jeff"
    firstNameInput.simulate('change', firstNameInput)
    expect(component.state('firstName')).toBe("Jeff")
  })

  it('should change state when you type a last name', () => {
    const component = mount(<SignupForm />)
    const lastNameInput = component.find('input[name="lastName"]')
    lastNameInput.get(0).value = "Johnson"
    lastNameInput.simulate('change', lastNameInput)
    expect(component.state('lastName')).toBe("Johnson")
  })

  it('should change state when you type password', () => {
    const component = mount(<SignupForm />)
    const passwordInput = component.find('input[type="password"]')
    passwordInput.get(0).value = "correcthorsebatterystaple"
    passwordInput.simulate('change', passwordInput)
    expect(component.state('password')).toBe("correcthorsebatterystaple")
  })

  it('should change state when you type an email', () => {
    const component = mount(<SignupForm />)
    const emailInput = component.find('input[name="email"]')
    emailInput.get(0).value = "Jeffy113@aol.com"
    emailInput.simulate('change')
    expect(component.state('email')).toBe("Jeffy113@aol.com")
  })

})

describe('Submit', () => {
  it('should call sendRegistration when clicked', () => {
    const component = mount(<SignupForm />)
    const button = component.find('[type="submit"]')
    component.instance().sendRegistration = jest.fn()
    component.update()
    button.simulate('click')
    expect(component.instance().sendRegistration).toHaveBeenCalledTimes(1)
  })
})
