<template>
  <header class="header">
    <div class="container">
      <h1 class="header__title page-title">Мой профиль</h1>
      <div v-if="user" class="header__additional">
        <StatsItem label="Рейтинг">{{ user.rating }}<Stars /></StatsItem>
        <StatsItem label="Отзывов">{{ user.reviewCount }}</StatsItem>
        <StatsItem label="Сделок">
          <StatsItem label="Продаж" inner>{{ user.tradeCount.sell }}</StatsItem>
          <StatsItem label="Покупок" inner>{{ user.tradeCount.buy }}</StatsItem>
        </StatsItem>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import StatsItem from '@/components/StatsItem.vue'
import Stars from '@/components/Stars.vue'

const { user } = storeToRefs(useUserStore())
</script>

<style scoped lang="scss">
.header {
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
  }

  &__additional {
    display: flex;
    gap: 15px;
    align-items: center;
  }
}
</style>
