
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

export enum TradeStatus {
  Confirmed,
  Paid,
  Completed,
  Declined
}
export interface Trade {
  id: number,
  createdAt: string,
  type: 'gold',
  name: string,
  seller: Pick<User, 'id' | 'username'>,
  status: TradeStatus,
  price: {
    amount: number,
    currency: string
  }
}
