import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { User } from '@/types'
import { user as mockupUserData } from '@/data/mockupData'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(mockupUserData)
  const isLoggedIn = computed(() => user.value !== null)

  return { user, isLoggedIn }
})
