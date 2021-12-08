import { Component, OnInit } from '@angular/core';
import { MyTradesService } from './my-trades.service';

@Component({
  selector: 'app-my-trades',
  templateUrl: './my-trades.component.html',
  styleUrls: ['./my-trades.component.css']
})
export class MyTradesComponent implements OnInit {

  constructor(private myTradesService: MyTradesService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = [
    'time', 'tradeId', 'orderId', 'side', 'status', 'security', 'duration',
    'repoRate', 'quantity', 'amount', 'repurchaseDate', 'repurchaseValue', 'deltaRepoIncome', 'investor'
  ];
  dataSource = this.myTradesService.getMyTrades();
}
