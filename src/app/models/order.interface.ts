export interface OrderI {
  time: string;
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
  orderType: string;
  investor: string;
  allOrNone: boolean;
}
