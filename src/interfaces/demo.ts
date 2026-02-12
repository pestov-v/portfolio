export interface CryptoPrice {
  symbol: string;
  price: number;
  change24h: number;
  volume: number;
  quoteVolume: number;
  lastUpdate: number;
}

export interface PriceHistoryPoint {
  timestamp: number;
  price: number;
}

export interface AlertCondition {
  type: 'above' | 'below' | 'change';
  threshold: number;
}

export interface AlertConfig {
  symbol: string;
  condition: AlertCondition;
  notifications: {
    browser: boolean;
    email: boolean;
    sound: boolean;
  };
}

export interface WebSocketState {
  connected: boolean;
  reconnecting: boolean;
  error: string | null;
}

export type SortDirection = 'asc' | 'desc';
export type SortColumn = 'symbol' | 'price' | 'change24h' | 'volume' | 'quoteVolume';
export type FilterType = 'all' | 'gainers' | 'losers';
