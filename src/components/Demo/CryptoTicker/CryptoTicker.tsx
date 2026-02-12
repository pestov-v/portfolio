import { FC, useEffect, useRef, useState, useCallback } from 'react';
import { CryptoPrice } from '../../../interfaces/demo';
import styles from './CryptoTicker.module.scss';

interface CryptoTickerProps {
  prices: CryptoPrice[];
  onPriceUpdate?: (symbol: string, price: number) => void;
  onSelectSymbol?: (symbol: string) => void;
  selectedSymbol?: string;
}

const CRYPTO_ICONS: Record<string, string> = {
  BTCUSDT: '₿',
  ETHUSDT: 'Ξ',
  SOLUSDT: '◎',
  BNBUSDT: 'B',
  XRPUSDT: 'X',
  ADAUSDT: '₳',
  DOTUSDT: '●',
  MATICUSDT: 'M',
};

export const CryptoTicker: FC<CryptoTickerProps> = ({ prices, onPriceUpdate, onSelectSymbol, selectedSymbol }) => {
  const prevPricesRef = useRef<Map<string, number>>(new Map());
  const [flashingCards, setFlashingCards] = useState<Map<string, 'up' | 'down'>>(new Map());
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    prices.forEach((crypto) => {
      const prevPrice = prevPricesRef.current.get(crypto.symbol);

      if (prevPrice !== undefined && prevPrice !== crypto.price) {
        const direction = crypto.price > prevPrice ? 'up' : 'down';
        setFlashingCards((prev) => new Map(prev).set(crypto.symbol, direction));

        // Remove flash after animation
        setTimeout(() => {
          setFlashingCards((prev) => {
            const newMap = new Map(prev);
            newMap.delete(crypto.symbol);
            return newMap;
          });
        }, 600);

        if (onPriceUpdate) {
          onPriceUpdate(crypto.symbol, crypto.price);
        }
      }

      prevPricesRef.current.set(crypto.symbol, crypto.price);
    });
  }, [prices, onPriceUpdate]);

  const formatPrice = (price: number): string => {
    if (price >= 1000) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (price >= 1) return price.toFixed(2);
    return price.toFixed(4);
  };

  const formatChange = (change: number): string => {
    return `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
  };

  const scrollToCard = useCallback((symbol: string) => {
    const cardElement = cardRefs.current.get(symbol);
    const container = scrollContainerRef.current;

    if (cardElement && container) {
      const containerWidth = container.offsetWidth;
      const cardLeft = cardElement.offsetLeft;
      const cardWidth = cardElement.offsetWidth;

      // Calculate scroll position to center the card
      const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2);

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleCardClick = useCallback((symbol: string) => {
    onSelectSymbol?.(symbol);
    scrollToCard(symbol);
  }, [onSelectSymbol, scrollToCard]);

  // Auto-scroll when selectedSymbol changes externally (e.g., from symbol selector buttons)
  useEffect(() => {
    if (selectedSymbol) {
      scrollToCard(selectedSymbol);
    }
  }, [selectedSymbol, scrollToCard]);

  return (
    <div className={styles.ticker}>
      <div className={styles.scrollContainer} ref={scrollContainerRef}>
        {prices.map((crypto) => {
          const flashDirection = flashingCards.get(crypto.symbol);
          const isPositive = crypto.change24h >= 0;
          const isSelected = selectedSymbol === crypto.symbol;

          return (
            <div
              key={crypto.symbol}
              ref={(el) => {
                if (el) {
                  cardRefs.current.set(crypto.symbol, el);
                } else {
                  cardRefs.current.delete(crypto.symbol);
                }
              }}
              className={`${styles.card} ${
                flashDirection === 'up' ? styles.flashUp : flashDirection === 'down' ? styles.flashDown : ''
              } ${isSelected ? styles.selected : ''}`}
              onClick={() => handleCardClick(crypto.symbol)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(crypto.symbol);
                }
              }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{CRYPTO_ICONS[crypto.symbol] || '●'}</span>
                <span className={styles.symbol}>{crypto.symbol.replace('USDT', '')}</span>
              </div>

              <div className={styles.price}>${formatPrice(crypto.price)}</div>

              <div className={`${styles.change} ${isPositive ? styles.positive : styles.negative}`}>
                {formatChange(crypto.change24h)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
