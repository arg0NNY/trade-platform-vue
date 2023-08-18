import { mount } from '@vue/test-utils'
import NavTabs from '../NavTabs.vue'
import { expect } from 'vitest'
import NavTab from '../NavTab.vue'

describe('NavTabs', () => {
  const tabs = [
    { key: 'first', label: 'First' },
    { key: 'second', label: 'Second' }
  ]

  it('should be <nav>', () => {
    const wrapper = mount(NavTabs, { props: { tabs } })
    expect(wrapper.find('nav').exists()).toBe(true)
  })

  it('should render all the given tabs', () => {
    const wrapper = mount(NavTabs, { props: { tabs } })
    expect(wrapper.html()).toContain('First')
    expect(wrapper.html()).toContain('Second')
  })

  it('should emit update:active when tab is clicked', async () => {
    const wrapper = mount(NavTabs, { props: { tabs } })
    await wrapper.get('nav *:nth-child(2)').trigger('click')
    expect(wrapper.emitted()['update:active'][0]).toEqual(['second'])
  })

  it('should set tab as active corresponding to active prop', async () => {
    const wrapper = mount(NavTabs, { props: { tabs, active: 'second' } })
    expect(wrapper.findAllComponents(NavTab)[1].props('active')).toBe(true)
  })
})
