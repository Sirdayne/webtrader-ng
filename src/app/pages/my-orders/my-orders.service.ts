import { Injectable } from '@angular/core';
import { OrderI } from '../../models/order.interface';

const myOrders: OrderI[] = [
  {
    time: '2022-06-09T13:00:00',
    orderId: 453,
    side: 'Sell',
    status: 'CONFIRMED',
    security: 'HSBK.Y',
    duration: 7,
    repoRate: 4.66,
    quantity: 500,
    amount: 7015,
    repurchaseDate: '2022-06-09T00:00:00',
    repurchaseValue: 7021.27,
    orderType: 'Limit',
    investor: '000000693',
    allOrNone: false
  },
  {
    time: '2022-06-09T13:00:00',
    orderId: 467,
    side: 'Buy',
    status: 'MATCHED',
    security: 'KAP.Y',
    duration: 1,
    repoRate: 3,
    quantity: 1300,
    amount: 33059,
    repurchaseDate: '2022-06-09T00:00:00',
    repurchaseValue: 33061.72,
    orderType: 'Limit',
    investor: '000000699',
    allOrNone: true
  },
  {
    time: '2022-06-09T13:00:00',
    orderId: 453,
    side: 'Sell',
    status: 'CONFIRMED',
    security: 'HSBK.Y',
    duration: 7,
    repoRate: 4.66,
    quantity: 500,
    amount: 7015,
    repurchaseDate: '2022-06-09T00:00:00',
    repurchaseValue: 7021.27,
    orderType: 'Limit',
    investor: '000000693',
    allOrNone: false
  },
  {
    time: '2022-06-09T13:00:00',
    orderId: 467,
    side: 'Buy',
    status: 'MATCHED',
    security: 'KAP.Y',
    duration: 1,
    repoRate: 3,
    quantity: 1300,
    amount: 33059,
    repurchaseDate: '2022-06-09T00:00:00',
    repurchaseValue: 33061.72,
    orderType: 'Limit',
    investor: '000000699',
    allOrNone: true
  },
  {
    time: '2022-06-09T13:00:00',
    orderId: 453,
    side: 'Sell',
    status: 'CONFIRMED',
    security: 'HSBK.Y',
    duration: 7,
    repoRate: 4.66,
    quantity: 500,
    amount: 7015,
    repurchaseDate: '2022-06-09T00:00:00',
    repurchaseValue: 7021.27,
    orderType: 'Limit',
    investor: '000000693',
    allOrNone: false
  },
  {
    time: '2022-06-09T13:00:00',
    orderId: 467,
    side: 'Buy',
    status: 'MATCHED',
    security: 'KAP.Y',
    duration: 1,
    repoRate: 3,
    quantity: 1300,
    amount: 33059,
    repurchaseDate: '2022-06-09T00:00:00',
    repurchaseValue: 33061.72,
    orderType: 'Limit',
    investor: '000000699',
    allOrNone: false
  },
  {
    time: '2022-06-09T13:00:00',
    orderId: 453,
    side: 'Sell',
    status: 'CONFIRMED',
    security: 'HSBK.Y',
    duration: 7,
    repoRate: 4.66,
    quantity: 500,
    amount: 7015,
    repurchaseDate: '2022-06-09T00:00:00',
    repurchaseValue: 7021.27,
    orderType: 'Limit',
    investor: '000000693',
    allOrNone: false
  },
  {
    time: '2022-06-09T13:00:00',
    orderId: 467,
    side: 'Buy',
    status: 'MATCHED',
    security: 'KAP.Y',
    duration: 1,
    repoRate: 3,
    quantity: 1300,
    amount: 33059,
    repurchaseDate: '2022-06-09T00:00:00',
    repurchaseValue: 33061.72,
    orderType: 'Limit',
    investor: '000000699',
    allOrNone: false
  }
];

@Injectable({
  providedIn: 'root'
})
export class MyOrdersService {

  constructor() { }

  getMyOrders() {
    return myOrders;
  }
}
