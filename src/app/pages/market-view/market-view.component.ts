import { Component, OnInit } from '@angular/core';
import { MarketViewService } from './market-view.service';

@Component({
  selector: 'app-market-view',
  templateUrl: './market-view.component.html',
  styleUrls: ['./market-view.component.css']
})
export class MarketViewComponent implements OnInit {

  showTrades = true;

  constructor(private marketViewService: MarketViewService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.marketViewService.getMarketView();
}
