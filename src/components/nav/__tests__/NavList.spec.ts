import { mount } from '@vue/test-utils'
import NavList from '../NavList.vue'
import { expect } from 'vitest'

describe('NavList', () => {
  it('should be <nav>', () => {
    const wrapper = mount(NavList)
    expect(wrapper.find('nav').exists()).toBe(true)
  })

  it('renders slots content', () => {
    const wrapper = mount(NavList, { slots: { default: 'Nav links' } })
    expect(wrapper.text()).toBe('Nav links')
  })
})
