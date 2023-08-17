<template>
  <BaseHeader class="app__header" />
  <div class="container app__container">
    <Sidebar class="app__sidebar" />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from '@/components/chunks/BaseHeader.vue'
import Sidebar from '@/components/chunks/Sidebar.vue'
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
