<template>
  <div class="user-info">
    <div class="user-info__main">
      <div class="user-info__avatar box">
        <IconUser />
      </div>
      <div class="user-info__content">
        <div class="user-info__username">{{ user.username }}</div>
        <OnlineStatus :online="user.isOnline" />
      </div>
    </div>
    <div class="user-info__description">{{ user.description }}</div>
    <div class="user-info-reg">
      <div class="user-info-reg__label">Регистрация: {{ dayjs(user.createdAt).fromNow() }}</div>
      <div class="user-info-reg__value">{{ dayjs(user.createdAt).format('D MMMM YYYY, в H:mm') }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/types'
import IconUser from '@/components/icons/IconUser.vue'
import OnlineStatus from '@/components/user/OnlineStatus.vue'
import dayjs from 'dayjs'

const props = defineProps<{
  user: User
}>()
</script>

<style scoped lang="scss">
@import "@/assets/scss/base/settings";

.user-info {
  display: grid;
  gap: 20px;
  color: $color-primary;

  &__main {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  &__avatar {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    :deep(svg) {
      width: 34px;
      height: 34px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__username {
    font-size: 18px;
    font-weight: 700;
  }
  &__description {
    font-size: 14px;
    font-weight: 500;
    color: $color-secondary;
  }
  .user-info-reg {
    border-radius: 15px;
    background: rgba(14, 9, 19, 0.50);
    padding: 15px;

    &__label {
      font-size: 12px;
      font-weight: 500;
      line-height: 26px;
      color: $color-secondary;
    }
    &__value {
      font-size: 14px;
      font-weight: 500;
      line-height: 26px;
    }
  }
}
</style>