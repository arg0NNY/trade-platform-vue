<template>
  <ViewTitle>Сделки</ViewTitle>
  <NavTabs :tabs="[
    { key: 'buy', label: 'Покупки' },
    { key: 'sell', label: 'Продажи' }
  ]" v-model:active="tab" />
</template>

<script setup lang="ts">
import ViewTitle from '@/components/ViewTitle.vue'
import NavTabs from '@/components/nav/NavTabs.vue'
import { useRouteHash } from '@vueuse/router'
import type { Ref } from 'vue'
import { computed } from 'vue'

const hash = useRouteHash('#buy') as Ref<string>
const tab = computed({
  get: () => hash.value.slice(1),
  set: value => hash.value = `#${value}`
})
</script>
