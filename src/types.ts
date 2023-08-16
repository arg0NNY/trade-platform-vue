
export interface User {
  id: number,
  username: string,
  description: string,
  rating: number,
  reviewCount: number,
  tradeCount: {
    buy: number,
    sell: number
  },
  isOnline: boolean,
  createdAt: string
}

export type TradeType = 'gold' | 'silver' | 'platinum'
export type TradeStatus = 'confirmed' | 'paid' | 'completed' | 'declined'
export interface Trade {
  id: number,
  createdAt: string,
  type: TradeType,
  name: string,
  seller: Pick<User, 'id' | 'username'>,
  status: TradeStatus,
  price: {
    amount: number,
    currency: string
  }
}
