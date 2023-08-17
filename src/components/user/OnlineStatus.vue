<template>
  <Status class="user-info__status" :type="online ? 'success' : 'danger'">{{ online ? 'Онлайн' : 'Офлайн' }}</Status>
</template>

<script setup lang="ts">
import Status from '@/components/Status.vue'

const props = defineProps<{
  online: boolean
}>()
</script>
