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
      <div v-if="compact" class="user-info__description">{{ user.description }}</div>
      <slot />
    </div>
    <template v-if="!compact">
      <div class="user-info__description">{{ user.description }}</div>
      <div class="user-info-reg">
        <div class="user-info-reg__label">Регистрация: {{ dayjs(user.createdAt).fromNow() }}</div>
        <div class="user-info-reg__value">{{ dayjs(user.createdAt).format('D MMMM YYYY, в&nbsp;H:mm') }}</div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/types'
import IconUser from '@/components/icons/IconUser.vue'
import OnlineStatus from '@/components/user/OnlineStatus.vue'
import dayjs from 'dayjs'

const props = defineProps<{
  user: User,
  compact?: boolean
}>()
</script>

<style scoped lang="scss">
@import "@/assets/scss/base/settings";
@import "@/assets/scss/base/mixins/includes";

.user-info {
  display: grid;
  gap: 20px;
  color: $color-primary;
  @include media-breakpoint-down(md) {
    gap: 15px;
  }

  &__main {
    display: flex;
    align-items: center;
    gap: 15px;
    @include media-breakpoint-down(md) {
      gap: 10px;
    }

    .user-info__description {
      margin-left: auto;
      flex: 1;
      max-width: 144px;
      display: -webkit-box;
      line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &__avatar {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    @include media-breakpoint-down(desktop) {
      width: 50px;
      height: 50px;
      border-radius: 15px;
    }
    @include media-breakpoint-only(md) {
      width: 35px;
      height: 35px;
      border-radius: 10px;
    }

    :deep(svg) {
      width: 34px;
      height: 34px;

      @include media-breakpoint-down(desktop) {
        width: 24px;
        height: 24px;
      }
      @include media-breakpoint-only(md) {
        width: 17px;
        height: 17px;
      }
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @include media-breakpoint-down(md) {
      gap: 7px;
    }
  }
  &__username {
    font-size: 18px;
    font-weight: 700;
    @include media-breakpoint-down(desktop) {
      font-size: 14px;
    }
    @include media-breakpoint-down(sm) {
      font-size: 13px;
    }
  }
  &__description {
    font-size: 14px;
    font-weight: 500;
    color: $color-secondary;
    @include media-breakpoint-down(desktop) {
      font-size: 12px;
    }
  }
  .user-info-reg {
    border-radius: 15px;
    background: rgba(14, 9, 19, 0.50);
    padding: 15px;
    @include media-breakpoint-only(md) {
      padding: 10px 15px;
    }
    @include media-breakpoint-down(sm) {
      display: flex;
      gap: 5px;
    }

    &__label {
      font-size: 12px;
      font-weight: 500;
      line-height: 26px;
      color: $color-secondary;
      @include media-breakpoint-down(desktop) {
        line-height: 20px;
        margin-bottom: 5px;
      }
    }
    &__value {
      font-size: 14px;
      font-weight: 500;
      line-height: 26px;
      @include media-breakpoint-down(md) {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
}
</style>
