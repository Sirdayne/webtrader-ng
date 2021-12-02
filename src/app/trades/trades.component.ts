import { Component, OnInit } from '@angular/core';
import { TradesService } from './trades.service';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  constructor(private tradesService: TradesService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.tradesService.getTrades();
}
