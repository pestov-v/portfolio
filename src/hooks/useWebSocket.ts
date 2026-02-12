import { useEffect, useRef, useState, useCallback } from 'react';
import { CryptoPrice, WebSocketState } from '../interfaces/demo';

const BINANCE_WS_URL = 'wss://stream.binance.com:9443/ws';
const RECONNECT_DELAY = 3000;
const MAX_RECONNECT_ATTEMPTS = 5;

// Symbols to track
const SYMBOLS = ['btcusdt', 'ethusdt', 'solusdt', 'bnbusdt', 'xrpusdt', 'adausdt', 'dotusdt', 'maticusdt'];

// Mock data generator for fallback
const generateMockPrice = (basePrice: number, prevPrice?: number): number => {
  const change = prevPrice
    ? (Math.random() - 0.5) * (basePrice * 0.002)
    : 0;
  return Math.max(basePrice + change, basePrice * 0.95);
};

const MOCK_BASE_PRICES: Record<string, number> = {
  BTCUSDT: 43250,
  ETHUSDT: 2340,
  SOLUSDT: 98,
  BNBUSDT: 315,
  XRPUSDT: 0.52,
  ADAUSDT: 0.48,
  DOTUSDT: 7.2,
  MATICUSDT: 0.85,
};

export function useWebSocket(useMockData = false) {
  const [prices, setPrices] = useState<Map<string, CryptoPrice>>(new Map());
  const [wsState, setWsState] = useState<WebSocketState>({
    connected: false,
    reconnecting: false,
    error: null,
  });

  const wsRef = useRef<WebSocket | null>(null);
  const reconnectAttemptsRef = useRef(0);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>();
  const mockIntervalRef = useRef<NodeJS.Timeout>();
  const mockPricesRef = useRef<Map<string, number>>(new Map());

  const startMockData = useCallback(() => {
    // Initialize mock prices
    Object.entries(MOCK_BASE_PRICES).forEach(([symbol, basePrice]) => {
      mockPricesRef.current.set(symbol, basePrice);
    });

    // Update mock data every second
    mockIntervalRef.current = setInterval(() => {
      setPrices((prevPrices) => {
        const newPrices = new Map(prevPrices);

        Object.entries(MOCK_BASE_PRICES).forEach(([symbol, basePrice]) => {
          const prevMockPrice = mockPricesRef.current.get(symbol) || basePrice;
          const newPrice = generateMockPrice(basePrice, prevMockPrice);
          mockPricesRef.current.set(symbol, newPrice);

          const prevData = prevPrices.get(symbol);
          const change24h = prevData?.change24h || (Math.random() - 0.5) * 10;

          newPrices.set(symbol, {
            symbol,
            price: newPrice,
            change24h,
            volume: basePrice * 1000 * (0.8 + Math.random() * 0.4),
            quoteVolume: basePrice * 50000 * (0.8 + Math.random() * 0.4),
            lastUpdate: Date.now(),
          });
        });

        return newPrices;
      });
    }, 1000);

    setWsState({ connected: true, reconnecting: false, error: null });
  }, []);

  const stopMockData = useCallback(() => {
    if (mockIntervalRef.current) {
      clearInterval(mockIntervalRef.current);
      mockIntervalRef.current = undefined;
    }
  }, []);

  const connect = useCallback(() => {
    if (useMockData) {
      startMockData();
      return;
    }

    try {
      const streams = SYMBOLS.map(s => `${s}@ticker`).join('/');
      const url = `${BINANCE_WS_URL}/${streams}`;

      wsRef.current = new WebSocket(url);

      wsRef.current.onopen = () => {
        setWsState({ connected: true, reconnecting: false, error: null });
        reconnectAttemptsRef.current = 0;
      };

      wsRef.current.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          setPrices((prevPrices) => {
            const newPrices = new Map(prevPrices);
            newPrices.set(data.s, {
              symbol: data.s,
              price: parseFloat(data.c),
              change24h: parseFloat(data.P),
              volume: parseFloat(data.v),
              quoteVolume: parseFloat(data.q),
              lastUpdate: Date.now(),
            });
            return newPrices;
          });
        } catch (error) {
          console.error('Failed to parse WebSocket message:', error);
        }
      };

      wsRef.current.onerror = (error) => {
        console.error('WebSocket error:', error);
        setWsState((prev) => ({ ...prev, error: 'Connection error' }));
      };

      wsRef.current.onclose = () => {
        setWsState((prev) => ({ ...prev, connected: false }));

        if (reconnectAttemptsRef.current < MAX_RECONNECT_ATTEMPTS) {
          setWsState((prev) => ({ ...prev, reconnecting: true }));
          reconnectTimeoutRef.current = setTimeout(() => {
            reconnectAttemptsRef.current++;
            connect();
          }, RECONNECT_DELAY);
        } else {
          setWsState((prev) => ({
            ...prev,
            reconnecting: false,
            error: 'Failed to connect. Using mock data.'
          }));
          // Fallback to mock data
          startMockData();
        }
      };
    } catch (error) {
      console.error('Failed to create WebSocket:', error);
      setWsState({ connected: false, reconnecting: false, error: 'Failed to connect' });
      // Fallback to mock data
      startMockData();
    }
  }, [useMockData, startMockData]);

  const disconnect = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
    }

    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }

    stopMockData();

    setWsState({ connected: false, reconnecting: false, error: null });
  }, [stopMockData]);

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, [connect, disconnect]);

  return {
    prices: Array.from(prices.values()),
    wsState,
    reconnect: connect,
  };
}
