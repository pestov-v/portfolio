import { FC, useMemo, useState } from 'react';
import { PriceHistoryPoint } from '../../../interfaces/demo';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './PriceChart.module.scss';

interface PriceChartProps {
  data: PriceHistoryPoint[];
  symbol: string;
  currentPrice: number;
}

export const PriceChart: FC<PriceChartProps> = ({ data, symbol, currentPrice }) => {
  const { t } = useLanguage();
  const [hoveredPoint, setHoveredPoint] = useState<{ x: number; y: number; price: number; timestamp: number } | null>(null);

  const { path, gradientId, points, minPrice, maxPrice, priceRange } = useMemo(() => {
    if (data.length === 0) {
      return { path: '', gradientId: `gradient-${symbol}`, points: [], minPrice: 0, maxPrice: 0, priceRange: 0 };
    }

    const width = 800;
    const height = 300;
    const padding = 40;

    const prices = data.map(d => d.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = maxPrice - minPrice || 1;

    const xScale = (index: number) => padding + (index / (data.length - 1)) * (width - padding * 2);
    const yScale = (price: number) => height - padding - ((price - minPrice) / priceRange) * (height - padding * 2);

    // Create SVG path
    const pathData = data
      .map((point, index) => {
        const x = xScale(index);
        const y = yScale(point.price);
        return index === 0 ? `M ${x},${y}` : `L ${x},${y}`;
      })
      .join(' ');

    // Create area path (fill under line)
    const areaPath = `${pathData} L ${xScale(data.length - 1)},${height - padding} L ${padding},${height - padding} Z`;

    // Create points for hover detection
    const points = data.map((point, index) => ({
      x: xScale(index),
      y: yScale(point.price),
      price: point.price,
      timestamp: point.timestamp,
    })) as Array<{ x: number; y: number; price: number; timestamp: number }>;

    return {
      path: areaPath,
      gradientId: `gradient-${symbol}`,
      points,
      minPrice,
      maxPrice,
      priceRange,
    };
  }, [data, symbol]);

  const formatPrice = (price: number): string => {
    if (price >= 1000) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (price >= 1) return price.toFixed(2);
    return price.toFixed(4);
  };

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (points.length === 0) return;

    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;

    // Find closest point
    let closestPoint = points[0];
    let minDistance = Math.abs(x - points[0].x);

    points.forEach(point => {
      const distance = Math.abs(x - point.x);
      if (distance < minDistance) {
        minDistance = distance;
        closestPoint = point;
      }
    });

    setHoveredPoint(closestPoint);
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  if (data.length === 0) {
    return (
      <div className={styles.chart}>
        <div className={styles.emptyState}>
          <div className={styles.loader} />
          <p>{t.demo.loadingChart}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.chart}>
      <div className={styles.chartHeader}>
        <div>
          <h3 className={styles.chartTitle}>{symbol.replace('USDT', '/USDT')}</h3>
          <p className={styles.chartPrice}>${formatPrice(currentPrice)}</p>
        </div>
        <div className={styles.chartInfo}>
          <span className={styles.infoLabel}>{t.demo.range}:</span>
          <span className={styles.infoValue}>
            ${formatPrice(minPrice)} - ${formatPrice(maxPrice)}
          </span>
        </div>
      </div>

      <div className={styles.chartContainer}>
        <svg
          viewBox="0 0 800 300"
          className={styles.svg}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--primary-color)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--primary-color)" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <g className={styles.grid}>
            {[0, 1, 2, 3, 4].map(i => {
              const y = 40 + (i * (300 - 80)) / 4;
              const price = maxPrice - (i * priceRange) / 4;
              return (
                <g key={i}>
                  <line x1="40" y1={y} x2="760" y2={y} stroke="var(--border-color)" strokeWidth="1" />
                  <text x="20" y={y + 5} fill="var(--text-secondary)" fontSize="12" textAnchor="end">
                    {formatPrice(price)}
                  </text>
                </g>
              );
            })}
          </g>

          {/* Area fill */}
          <path d={path} fill={`url(#${gradientId})`} className={styles.area} />

          {/* Line */}
          <path
            d={path.split(' Z')[0]}
            fill="none"
            stroke="var(--primary-color)"
            strokeWidth="2"
            className={styles.line}
          />

          {/* Hover point */}
          {hoveredPoint && (
            <>
              <line
                x1={hoveredPoint.x}
                y1="40"
                x2={hoveredPoint.x}
                y2="260"
                stroke="var(--primary-color)"
                strokeWidth="1"
                strokeDasharray="4"
                opacity="0.5"
              />
              <circle
                cx={hoveredPoint.x}
                cy={hoveredPoint.y}
                r="5"
                fill="var(--primary-color)"
                stroke="white"
                strokeWidth="2"
              />
            </>
          )}
        </svg>

        {/* Tooltip */}
        {hoveredPoint && (
          <div
            className={styles.tooltip}
            style={{
              left: `${(hoveredPoint.x / 800) * 100}%`,
              top: `${(hoveredPoint.y / 300) * 100}%`,
            }}
          >
            <div className={styles.tooltipPrice}>${formatPrice(hoveredPoint.price)}</div>
            <div className={styles.tooltipTime}>{formatTime(hoveredPoint.timestamp)}</div>
          </div>
        )}
      </div>
    </div>
  );
};
