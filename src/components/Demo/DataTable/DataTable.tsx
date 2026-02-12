import { FC, useMemo, useState } from 'react';
import { CryptoPrice, SortColumn, SortDirection, FilterType } from '../../../interfaces/demo';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useDebounce } from '../../../hooks/useDebounce';
import styles from './DataTable.module.scss';

interface DataTableProps {
  data: CryptoPrice[];
}

export const DataTable: FC<DataTableProps> = ({ data }) => {
  const { t } = useLanguage();
  const [sortColumn, setSortColumn] = useState<SortColumn>('symbol');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const debouncedSearch = useDebounce(searchQuery, 300);

  const sortedAndFilteredData = useMemo(() => {
    let result = [...data];

    // Filter by search query
    if (debouncedSearch) {
      result = result.filter(item =>
        item.symbol.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    // Filter by type
    if (filter === 'gainers') {
      result = result.filter(item => item.change24h > 0);
    } else if (filter === 'losers') {
      result = result.filter(item => item.change24h < 0);
    }

    // Sort
    result.sort((a, b) => {
      let aValue = a[sortColumn];
      let bValue = b[sortColumn];

      if (typeof aValue === 'string') {
        return sortDirection === 'asc'
          ? aValue.localeCompare(bValue as string)
          : (bValue as string).localeCompare(aValue);
      }

      return sortDirection === 'asc'
        ? (aValue as number) - (bValue as number)
        : (bValue as number) - (aValue as number);
    });

    return result;
  }, [data, sortColumn, sortDirection, filter, debouncedSearch]);

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const formatPrice = (price: number): string => {
    if (price >= 1000) return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (price >= 1) return `$${price.toFixed(2)}`;
    return `$${price.toFixed(4)}`;
  };

  const formatVolume = (volume: number): string => {
    if (volume >= 1e9) return `$${(volume / 1e9).toFixed(2)}B`;
    if (volume >= 1e6) return `$${(volume / 1e6).toFixed(2)}M`;
    if (volume >= 1e3) return `$${(volume / 1e3).toFixed(2)}K`;
    return `$${volume.toFixed(2)}`;
  };

  const getSortIcon = (column: SortColumn) => {
    if (sortColumn !== column) return '↕';
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <h3 className={styles.title}>{t.demo.marketData}</h3>

        <div className={styles.controls}>
          <input
            type="text"
            placeholder={t.demo.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />

          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
              onClick={() => setFilter('all')}
            >
              {t.demo.all}
            </button>
            <button
              className={`${styles.filterButton} ${filter === 'gainers' ? styles.active : ''}`}
              onClick={() => setFilter('gainers')}
            >
              {t.demo.gainers}
            </button>
            <button
              className={`${styles.filterButton} ${filter === 'losers' ? styles.active : ''}`}
              onClick={() => setFilter('losers')}
            >
              {t.demo.losers}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th onClick={() => handleSort('symbol')} className={styles.sortable}>
                {t.demo.symbol} <span className={styles.sortIcon}>{getSortIcon('symbol')}</span>
              </th>
              <th onClick={() => handleSort('price')} className={styles.sortable}>
                {t.demo.price} <span className={styles.sortIcon}>{getSortIcon('price')}</span>
              </th>
              <th onClick={() => handleSort('change24h')} className={styles.sortable}>
                {t.demo.change24h} <span className={styles.sortIcon}>{getSortIcon('change24h')}</span>
              </th>
              <th onClick={() => handleSort('volume')} className={styles.sortable}>
                {t.demo.volume} <span className={styles.sortIcon}>{getSortIcon('volume')}</span>
              </th>
              <th onClick={() => handleSort('quoteVolume')} className={styles.sortable}>
                {t.demo.marketCap} <span className={styles.sortIcon}>{getSortIcon('quoteVolume')}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedAndFilteredData.map((crypto) => (
              <tr key={crypto.symbol} className={styles.row}>
                <td className={styles.symbolCell}>
                  <span className={styles.symbolText}>{crypto.symbol.replace('USDT', '')}</span>
                  <span className={styles.pairText}>/USDT</span>
                </td>
                <td className={styles.priceCell}>{formatPrice(crypto.price)}</td>
                <td className={crypto.change24h >= 0 ? styles.positive : styles.negative}>
                  {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
                </td>
                <td>{formatVolume(crypto.volume)}</td>
                <td>{formatVolume(crypto.quoteVolume)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {sortedAndFilteredData.length === 0 && (
          <div className={styles.emptyState}>
            <p>{t.demo.noResults}</p>
          </div>
        )}
      </div>
    </div>
  );
};
