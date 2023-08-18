<template>
  <div class="stars">
    <IconStar v-for="i in 5" />
  </div>
</template>

<script setup lang="ts">
import IconStar from '@/components/icons/IconStar.vue'
</script>

<style scoped lang="scss">
@import "@/assets/scss/base/settings";
@import "@/assets/scss/base/mixins/includes";

.stars {
  display: flex;
  align-items: center;
  gap: 9px;
  color: $color-secondary;
  @include media-breakpoint-down(desktop) {
    gap: 6px;
  }
  @include media-breakpoint-down(md) {
    gap: 4px;
  }

  :deep(svg) {
    width: 18px;
    height: 18px;
    @include media-breakpoint-down(desktop) {
      width: 13px;
      height: 13px;
    }
    @include media-breakpoint-down(md) {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
