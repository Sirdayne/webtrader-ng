export interface TradeI {
  time: string;
  tradeId: number;
  orderId: number;
  side: string;
  status: string;
  security: string;
  duration: number;
  repoRate: number;
  quantity: number;
  amount: number;
  repurchaseDate: string;
  repurchaseValue: number;
  deltaRepoIncome: number;
  investor: string;
}
