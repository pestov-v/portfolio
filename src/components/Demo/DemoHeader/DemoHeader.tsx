import { FC } from 'react';
import Link from 'next/link';
import { WebSocketState } from '../../../interfaces/demo';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './DemoHeader.module.scss';

interface DemoHeaderProps {
  wsState: WebSocketState;
}

export const DemoHeader: FC<DemoHeaderProps> = ({ wsState }) => {
  const { t } = useLanguage();

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{t.demo.title}</h1>
          <p className={styles.subtitle}>{t.demo.subtitle}</p>
        </div>

        <div className={styles.statusSection}>
          <div className={styles.connectionStatus}>
            <span
              className={`${styles.statusDot} ${
                wsState.connected ? styles.connected : styles.disconnected
              } ${wsState.reconnecting ? styles.reconnecting : ''}`}
            />
            <span className={styles.statusText}>
              {wsState.reconnecting
                ? t.demo.reconnecting
                : wsState.connected
                ? t.demo.connected
                : t.demo.disconnected}
            </span>
          </div>

          <Link href="/#projects" className={styles.backButton}>
            ← {t.demo.backToPortfolio}
          </Link>
        </div>
      </div>

      {wsState.error && (
        <div className={styles.errorBanner}>
          {wsState.error}
        </div>
      )}
    </div>
  );
};
