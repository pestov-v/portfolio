import { FC, useEffect, useRef, useState } from "react";
import styles from "./Chat.module.scss";

interface ChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const availableModels = [
  { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash ⚡", provider: "Google" },
  { id: "gemini-2.5-pro", name: "Gemini 2.5 Pro 🧠", provider: "Google" },
  { id: "gemini-2.0-flash", name: "Gemini 2.0 Flash", provider: "Google" },
];

export const Chat: FC<ChatProps> = ({ isOpen, onClose }) => {
  const [selectedModel, setSelectedModel] = useState("gemini-2.5-flash");
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [messages, setMessages] = useState<Array<{ role: string; content: string; id: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Small delay to ensure modal is fully rendered
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput("");
    setError(null);
    setIsLoading(true);

    // Add user message
    const userMsg = { role: "user", content: userMessage, id: Date.now().toString() };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
          model: selectedModel,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = "";
      const assistantId = (Date.now() + 1).toString();

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          assistantMessage += chunk;

          // Update or add assistant message
          setMessages((prev) => {
            const existing = prev.find((m) => m.id === assistantId);
            if (existing) {
              return prev.map((m) =>
                m.id === assistantId ? { ...m, content: assistantMessage } : m
              );
            }
            return [...prev, { role: "assistant", content: assistantMessage, id: assistantId }];
          });
        }
      }

      console.log("✅ Response received");
    } catch (err: any) {
      console.error("❌ Error sending message:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };


  if (!isOpen) return null;

  return (
    <div className={styles.chatOverlay} onClick={onClose}>
      <div
        className={styles.chatContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.chatHeader}>
          <div className={styles.headerContent}>
            <h3>💬 AI Assistant</h3>
            <div className={styles.modelSelector}>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className={styles.modelSelect}
              >
                {availableModels.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name} ({model.provider})
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            ✕
          </button>
        </div>

        <div className={styles.messagesContainer}>
          {messages.length === 0 && (
            <div className={styles.emptyState}>
              <p>👋 Hello! I&apos;m an AI assistant.</p>
              <p>
                Ask me anything about Volodymyr&apos;s skills, projects, or
                experience!
              </p>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={`${styles.message} ${
                message.role === "user"
                  ? styles.userMessage
                  : styles.assistantMessage
              }`}
            >
              <div className={styles.messageContent}>
                <div className={styles.messageRole}>
                  {message.role === "user" ? "👤 You" : "🤖 AI"}
                </div>
                <div className={styles.messageText}>{message.content}</div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className={`${styles.message} ${styles.assistantMessage}`}>
              <div className={styles.messageContent}>
                <div className={styles.messageRole}>🤖 AI</div>
                <div className={styles.typing}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className={`${styles.message} ${styles.assistantMessage}`}>
              <div className={styles.messageContent}>
                <div className={styles.messageRole}>🤖 AI</div>
                <div className={styles.messageText} style={{ color: "red" }}>
                  Error: {error}
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className={styles.inputForm}>
          <input
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className={styles.input}
            disabled={isLoading}
          />
          <button
            type="submit"
            className={styles.sendButton}
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? "⏳" : "📤"}
          </button>
        </form>
      </div>
    </div>
  );
};
