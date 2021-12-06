import { Injectable } from '@angular/core';

export interface PeriodicElement {
  security: string;
  period: number;
  currency: string;
  assetClass: string;
  refPrice?: number;
  haircut?: number;
  repoPrice?: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {security: 'HSBK.Y', period: 1, currency: 'USD', assetClass: 'Repo'},
  {security: 'HSBK.Y', period: 7, currency: 'USD', assetClass: 'Repo'},
  {security: 'HSBK.Y', period: 14, currency: 'USD', assetClass: 'Repo'},
  {security: 'HSBK.Y', period: 28, currency: 'USD', assetClass: 'Repo'},
  {security: 'KAP.Y', period: 1, currency: 'USD', assetClass: 'Repo'},
  {security: 'KAP.Y', period: 7, currency: 'USD', assetClass: 'Repo'},
  {security: 'KAP.Y', period: 14, currency: 'USD', assetClass: 'Repo'},
  {security: 'KAP.Y', period: 28, currency: 'USD', assetClass: 'Repo'},
];

@Injectable({
  providedIn: 'root'
})
export class MarketViewService {

  constructor() { }

  getMarketView() {
    return ELEMENT_DATA;
  }
}
