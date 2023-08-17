<template>
  <BaseHeader class="app__header" />
  <div class="container app__container">
    <Sidebar class="app__sidebar" />
    <main>

    </main>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from '@/components/chunks/BaseHeader.vue'
import StatsItem from '@/components/StatsItem.vue'
import Sidebar from '@/components/chunks/Sidebar.vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const { user } = storeToRefs(useUserStore())
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
