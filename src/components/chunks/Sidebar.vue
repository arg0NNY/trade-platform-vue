<template>
  <aside class="sidebar box">

  </aside>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const { user } = storeToRefs(useUserStore())
</script>

<style scoped lang="scss">
.sidebar {
  padding: 25px;
}
</style>
