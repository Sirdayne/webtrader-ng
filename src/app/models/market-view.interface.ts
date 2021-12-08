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
