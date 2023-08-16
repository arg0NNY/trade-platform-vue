import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useUserStore } from '@/stores/user'

describe('User Store', () => {
  beforeEach(() => { setActivePinia(createPinia()) })

  it('handles isLoggedIn correctly', () => {
    const store = useUserStore()
    expect(store.isLoggedIn).toBe(true)
    store.user = null
    expect(store.isLoggedIn).toBe(false)
  })
})
