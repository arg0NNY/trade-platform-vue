<template>
  <div class="stars">
    <IconStar v-for="i in 5" />
  </div>
</template>

<script setup>
import IconStar from '@/components/icons/IconStar.vue'
</script>

<style scoped lang="scss">
@import "@/assets/scss/base/settings";

.stars {
  display: flex;
  align-items: center;
  gap: 9px;
  color: $color-secondary;

  :deep(svg) {
    width: 18px;
    height: 18px;
  }
}
</style>
