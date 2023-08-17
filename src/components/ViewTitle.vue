<template>
  <div class="view-title title"><slot /></div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/base/settings";

.view-title {
  padding-top: 40px;
  border-top: 1px solid transparentize($color-secondary, .8);
  margin-bottom: 20px;
}
</style>
