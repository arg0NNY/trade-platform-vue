<template>
  <header class="header">
    <div class="container">
      <h1 class="header__title page-title">{{ title }}</h1>
      <div v-if="$slots.default" class="header__additional">
        <slot />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<style scoped lang="scss">
.header {
  margin-bottom: 40px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__additional {
    display: flex;
    gap: 15px;
    align-items: center;
  }
}
</style>
