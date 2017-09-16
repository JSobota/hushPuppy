import React from 'react'
import { shallow } from 'enzyme'
import GroupDisplay from './GroupDisplay'

describe('Rendering', () => {
  it('Renders the GroupDisplay component', () => {
    const groups = []
    const component = shallow(
      <GroupDisplay groups={groups} />
    )
    expect(component.children.length).toBe(1)
  })

  it('renders children from groups properly', () => {
    const  groups = [
      {id: "1", name: "first", endDate: "11/11/11"},
      {id: "2", name: "second", endDate: "12/21/22"}
    ]

    const component = shallow(
      <GroupDisplay groups={groups} />
    )
    const children = component.children()
    expect(children.length).toBe(2)
  })

})
