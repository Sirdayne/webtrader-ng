import { Injectable } from '@angular/core';

export interface MarketViewI {
  security: string;
  period: number;
  currency: string;
  assetClass: string;
  refPrice: number;
  haircut: number;
  repoPrice: number;
  qtyToLend: number;
  amountToLend: number;
  lenderRepoRate: number;
  qtyToBorrow: number;
  amountToBorrow: number;
  borrowerRepoRate: number;
  openRepoRate: number;
  highRepoRate: number;
  lowRepoRate: number;
  lastRepoRate: number;
  previousCloseRepoRate: number;
  repoRateChange: number;
  dailyVolume: number;
  dailyValue: number;
  numberOfTrades: number;
}

const ELEMENT_DATA: MarketViewI[] = [
  { security: 'HSBK.Y', period: 1, currency: 'USD', assetClass: 'Repo', refPrice: 17.54, haircut: 20, repoPrice: 14.03,
    qtyToLend: 1000, amountToLend: 14032, lenderRepoRate: 5.00000, qtyToBorrow: 5.5000, amountToBorrow: 16848.40, borrowerRepoRate: 1200,
    openRepoRate: 4.87, highRepoRate: 5.52, lowRepoRate: 4.45, lastRepoRate: 5.1, previousCloseRepoRate: 4.99, repoRateChange: 0.11,
    dailyVolume: 1543323.22, dailyValue: 21655911.42, numberOfTrades: 12 },
  { security: 'HSBK.Y', period: 7, currency: 'USD', assetClass: 'Repo', refPrice: 17.54, haircut: 20, repoPrice: 14.03,
    qtyToLend: 1000, amountToLend: 14032, lenderRepoRate: 5.00000, qtyToBorrow: 5.5000, amountToBorrow: 16848.40, borrowerRepoRate: 1200,
    openRepoRate: 4.87, highRepoRate: 5.52, lowRepoRate: 4.45, lastRepoRate: 5.1, previousCloseRepoRate: 4.99, repoRateChange: 0.11,
    dailyVolume: 1543323.22, dailyValue: 21655911.42, numberOfTrades: 12 },
  { security: 'HSBK.Y', period: 14, currency: 'USD', assetClass: 'Repo', refPrice: 17.54, haircut: 20, repoPrice: 14.03,
    qtyToLend: 1000, amountToLend: 14032, lenderRepoRate: 5.00000, qtyToBorrow: 5.5000, amountToBorrow: 16848.40, borrowerRepoRate: 1200,
    openRepoRate: 4.87, highRepoRate: 5.52, lowRepoRate: 4.45, lastRepoRate: 5.1, previousCloseRepoRate: 4.99, repoRateChange: 0.11,
    dailyVolume: 1543323.22, dailyValue: 21655911.42, numberOfTrades: 12 },
  { security: 'HSBK.Y', period: 28, currency: 'USD', assetClass: 'Repo', refPrice: 17.54, haircut: 20, repoPrice: 14.03,
    qtyToLend: 1000, amountToLend: 14032, lenderRepoRate: 5.00000, qtyToBorrow: 5.5000, amountToBorrow: 16848.40, borrowerRepoRate: 1200,
    openRepoRate: 4.87, highRepoRate: 5.52, lowRepoRate: 4.45, lastRepoRate: 5.1, previousCloseRepoRate: 4.99, repoRateChange: 0.11,
    dailyVolume: 1543323.22, dailyValue: 21655911.42, numberOfTrades: 12 },
  { security: 'KAP.Y', period: 1, currency: 'USD', assetClass: 'Repo', refPrice: 17.54, haircut: 20, repoPrice: 14.03,
    qtyToLend: 1000, amountToLend: 14032, lenderRepoRate: 5.00000, qtyToBorrow: 5.5000, amountToBorrow: 16848.40, borrowerRepoRate: 1200,
    openRepoRate: 4.87, highRepoRate: 5.52, lowRepoRate: 4.45, lastRepoRate: 5.1, previousCloseRepoRate: 4.99, repoRateChange: 0.11,
    dailyVolume: 1543323.22, dailyValue: 21655911.42, numberOfTrades: 12 },
  { security: 'KAP.Y', period: 7, currency: 'USD', assetClass: 'Repo', refPrice: 17.54, haircut: 20, repoPrice: 14.03,
    qtyToLend: 1000, amountToLend: 14032, lenderRepoRate: 5.00000, qtyToBorrow: 5.5000, amountToBorrow: 16848.40, borrowerRepoRate: 1200,
    openRepoRate: 4.87, highRepoRate: 5.52, lowRepoRate: 4.45, lastRepoRate: 5.1, previousCloseRepoRate: 4.99, repoRateChange: 0.11,
    dailyVolume: 1543323.22, dailyValue: 21655911.42, numberOfTrades: 12 },
  { security: 'KAP.Y', period: 14, currency: 'USD', assetClass: 'Repo', refPrice: 17.54, haircut: 20, repoPrice: 14.03,
    qtyToLend: 1000, amountToLend: 14032, lenderRepoRate: 5.00000, qtyToBorrow: 5.5000, amountToBorrow: 16848.40, borrowerRepoRate: 1200,
    openRepoRate: 4.87, highRepoRate: 5.52, lowRepoRate: 4.45, lastRepoRate: 5.1, previousCloseRepoRate: 4.99, repoRateChange: 0.11,
    dailyVolume: 1543323.22, dailyValue: 21655911.42, numberOfTrades: 12 },
  {security: 'KAP.Y', period: 28, currency: 'USD', assetClass: 'Repo', refPrice: 17.54, haircut: 20, repoPrice: 14.03,
    qtyToLend: 1000, amountToLend: 14032, lenderRepoRate: 5.00000, qtyToBorrow: 5.5000, amountToBorrow: 16848.40, borrowerRepoRate: 1200,
    openRepoRate: 4.87, highRepoRate: 5.52, lowRepoRate: 4.45, lastRepoRate: 5.1, previousCloseRepoRate: 4.99, repoRateChange: 0.11,
    dailyVolume: 1543323.22, dailyValue: 21655911.42, numberOfTrades: 12 },
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
