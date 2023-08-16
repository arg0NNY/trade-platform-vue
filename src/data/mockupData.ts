import type { Trade, User } from '@/types'
import { TradeStatus } from '@/types'

export const user: User = {
  id: 1,
  username: 'Ivan_Mazepa',
  description: 'Продажа голды в вов 24/7',
  rating: 0,
  reviewCount: 0,
  tradeCount: {
    sell: 0,
    buy: 0
  },
  isOnline: true,
  createdAt: '2023-08-16T17:01:47.461Z'
}

export const trades: Trade[] = [
  {
    id: 1,
    createdAt: '2023-08-16T17:02:47.461Z',
    type: 'gold',
    name: 'Золото',
    seller: {
      id: 2,
      username: 'GoldTrade'
    },
    status: TradeStatus.Declined,
    price: {
      amount: 80,
      currency: 'KZT'
    }
  },
  {
    id: 2,
    createdAt: '2023-08-16T17:03:47.461Z',
    type: 'gold',
    name: 'Золото',
    seller: {
      id: 2,
      username: 'GoldTrade'
    },
    status: TradeStatus.Confirmed,
    price: {
      amount: 80,
      currency: 'KZT'
    }
  },
  {
    id: 3,
    createdAt: '2023-08-16T17:04:47.461Z',
    type: 'gold',
    name: 'Золото',
    seller: {
      id: 2,
      username: 'GoldTrade'
    },
    status: TradeStatus.Paid,
    price: {
      amount: 80,
      currency: 'KZT'
    }
  },
  {
    id: 4,
    createdAt: '2023-08-16T17:05:47.461Z',
    type: 'gold',
    name: 'Золото',
    seller: {
      id: 2,
      username: 'GoldTrade'
    },
    status: TradeStatus.Completed,
    price: {
      amount: 80,
      currency: 'KZT'
    }
  }
]
