<template>
  <div class="view-title title"><slot /></div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/base/settings";
@import "@/assets/scss/base/mixins/includes";

.view-title {
  padding-top: 40px;
  border-top: 1px solid transparentize($color-secondary, .8);
  margin-bottom: 20px;

  @include media-breakpoint-down(desktop) {
    padding-top: 20px;
    margin-bottom: 10px;
  }
}
</style>
