import { FC } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './ChatButton.module.scss';

interface ChatButtonProps {
  onClick: () => void;
}

export const ChatButton: FC<ChatButtonProps> = ({ onClick }) => {
  const { t } = useLanguage();
  return (
    <button
      className={styles.chatButton}
      onClick={onClick}
      aria-label={t.chat.buttonTitle}
      title={t.chat.buttonTitle}
    >
      <span className={styles.icon}>💬</span>
    </button>
  );
};
