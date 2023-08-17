import { TradeStatus } from '@/types'

export const tradeTypeName = {
  gold: 'Золото'
} as const

export const tradeStatusName = {
  [TradeStatus.Confirmed]: 'Подтвержден',
  [TradeStatus.Paid]: 'Оплачен',
  [TradeStatus.Completed]: 'Выполнен',
  [TradeStatus.Declined]: 'Отклонен'
} as const

export const tradeStatusNormalized = {
  [TradeStatus.Confirmed]: 'pending',
  [TradeStatus.Paid]: 'warning',
  [TradeStatus.Completed]: 'success',
  [TradeStatus.Declined]: 'danger'
} as const
