import { useCallback, useRef } from 'react';
import { PriceHistoryPoint } from '../interfaces/demo';

const MAX_HISTORY_POINTS = 60;

export function usePriceHistory() {
  const historyRef = useRef<Map<string, PriceHistoryPoint[]>>(new Map());

  const addPrice = useCallback((symbol: string, price: number) => {
    const history = historyRef.current.get(symbol) || [];
    const newPoint: PriceHistoryPoint = {
      timestamp: Date.now(),
      price,
    };

    const updatedHistory = [...history, newPoint];

    // Keep only last MAX_HISTORY_POINTS
    if (updatedHistory.length > MAX_HISTORY_POINTS) {
      updatedHistory.shift();
    }

    historyRef.current.set(symbol, updatedHistory);
  }, []);

  const getHistory = useCallback((symbol: string): PriceHistoryPoint[] => {
    return historyRef.current.get(symbol) || [];
  }, []);

  const clearHistory = useCallback((symbol?: string) => {
    if (symbol) {
      historyRef.current.delete(symbol);
    } else {
      historyRef.current.clear();
    }
  }, []);

  return { addPrice, getHistory, clearHistory };
}
