import { Injectable } from '@angular/core';
import { TradeI } from '../../models/trade.interface';

const myTrades: TradeI[] = [
  {
    time: '09-06-2022T13:00:00',
    tradeId: 23,
    orderId: 453,
    side: 'Buy',
    status: 'MATCHED',
    security: 'KAP.Y',
    duration: 1,
    repoRate: 3,
    quantity: 1300,
    amount: 33059,
    repurchaseDate: '09-06-2022T00:00:00',
    repurchaseValue: 33061.72,
    deltaRepoIncome: 2.72,
    investor: '000000963'
  },
  {
    time: '11-06-2022T13:00:00',
    tradeId: 1,
    orderId: 2,
    side: 'Buy',
    status: 'MATCHED',
    security: 'KAP.Y',
    duration: 2,
    repoRate: 4,
    quantity: 1400,
    amount: 33059,
    repurchaseDate: '09-06-2022T00:00:00',
    repurchaseValue: 33061.72,
    deltaRepoIncome: 2.72,
    investor: '000000963'
  },
  {
    time: '09-06-2022T13:00:00',
    tradeId: 23,
    orderId: 453,
    side: 'Buy',
    status: 'MATCHED',
    security: 'KAP.Y',
    duration: 1,
    repoRate: 3,
    quantity: 1300,
    amount: 33059,
    repurchaseDate: '09-06-2022T00:00:00',
    repurchaseValue: 33061.72,
    deltaRepoIncome: 2.72,
    investor: '000000963'
  },
  {
    time: '11-06-2022T13:00:00',
    tradeId: 1,
    orderId: 2,
    side: 'Buy',
    status: 'MATCHED',
    security: 'KAP.Y',
    duration: 2,
    repoRate: 4,
    quantity: 1400,
    amount: 33059,
    repurchaseDate: '09-06-2022T00:00:00',
    repurchaseValue: 33061.72,
    deltaRepoIncome: 2.72,
    investor: '000000963'
  },
  {
    time: '09-06-2022T13:00:00',
    tradeId: 23,
    orderId: 453,
    side: 'Buy',
    status: 'MATCHED',
    security: 'KAP.Y',
    duration: 1,
    repoRate: 3,
    quantity: 1300,
    amount: 33059,
    repurchaseDate: '09-06-2022T00:00:00',
    repurchaseValue: 33061.72,
    deltaRepoIncome: 2.72,
    investor: '000000963'
  },
  {
    time: '11-06-2022T13:00:00',
    tradeId: 1,
    orderId: 2,
    side: 'Buy',
    status: 'MATCHED',
    security: 'KAP.Y',
    duration: 2,
    repoRate: 4,
    quantity: 1400,
    amount: 33059,
    repurchaseDate: '09-06-2022T00:00:00',
    repurchaseValue: 33061.72,
    deltaRepoIncome: 2.72,
    investor: '000000963'
  }
];

@Injectable({
  providedIn: 'root'
})
export class MyTradesService {

  constructor() { }

  getMyTrades() {
    return myTrades;
  }
}
