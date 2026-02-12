import { FC, useState } from 'react';
import { useWebSocket } from '../../hooks/useWebSocket';
import { usePriceHistory } from '../../hooks/usePriceHistory';
import { DemoHeader } from './DemoHeader/DemoHeader';
import { CryptoTicker } from './CryptoTicker/CryptoTicker';
import { PriceChart } from './PriceChart/PriceChart';
import { DataTable } from './DataTable/DataTable';
import styles from './Demo.module.scss';

export const Demo: FC = () => {
  const { prices, wsState } = useWebSocket();
  const { addPrice, getHistory } = usePriceHistory();
  const [selectedSymbol, setSelectedSymbol] = useState('BTCUSDT');

  const handlePriceUpdate = (symbol: string, price: number) => {
    addPrice(symbol, price);
  };

  const selectedCrypto = prices.find(p => p.symbol === selectedSymbol);
  const chartData = getHistory(selectedSymbol);

  return (
    <div className={styles.demo}>
      <DemoHeader wsState={wsState} />

      <div className={styles.container}>
        <CryptoTicker
          prices={prices}
          onPriceUpdate={handlePriceUpdate}
          onSelectSymbol={setSelectedSymbol}
          selectedSymbol={selectedSymbol}
        />

        <div className={styles.chartSection}>
          <div className={styles.symbolSelector}>
            {prices.map(crypto => (
              <button
                key={crypto.symbol}
                className={`${styles.symbolButton} ${selectedSymbol === crypto.symbol ? styles.active : ''}`}
                onClick={() => setSelectedSymbol(crypto.symbol)}
              >
                {crypto.symbol.replace('USDT', '')}
              </button>
            ))}
          </div>

          <PriceChart
            data={chartData}
            symbol={selectedSymbol}
            currentPrice={selectedCrypto?.price || 0}
          />
        </div>

        <DataTable data={prices} />
      </div>
    </div>
  );
};
