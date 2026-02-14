import { FC } from 'react';
import styles from './ChatButton.module.scss';

interface ChatButtonProps {
  onClick: () => void;
}

export const ChatButton: FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <button
      className={styles.chatButton}
      onClick={onClick}
      aria-label="Open AI Chat"
      title="Chat with AI Assistant"
    >
      <span className={styles.icon}>💬</span>
    </button>
  );
};
