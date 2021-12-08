import { Component, OnInit } from '@angular/core';
import { MyOrdersService } from './my-orders.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private myOrdersService: MyOrdersService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = [
    'time', 'orderId', 'side', 'status', 'security', 'duration',
    'repoRate', 'quantity', 'amount', 'repurchaseDate', 'repurchaseValue',
    'orderType', 'investor', 'allOrNone',
  ];
  dataSource = this.myOrdersService.getMyOrders();

}
