<template>
  <aside class="sidebar box">
    <UserInfo :user="user" />
  </aside>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import UserInfo from '@/components/user/UserInfo.vue'

const { user } = storeToRefs(useUserStore())
</script>

<style scoped lang="scss">
.sidebar {
  padding: 25px;
}
</style>
