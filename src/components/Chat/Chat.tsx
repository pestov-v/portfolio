import { FC, useCallback, useEffect, useRef, useState } from "react";
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
  const sessionIdRef = useRef<string>(
    `session_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  );

  const [messages, setMessages] = useState<Array<{ role: string; content: string; id: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Buffer for streaming chunks — avoids setMessages on every chunk
  const streamBufferRef = useRef("");
  const rafRef = useRef<number | null>(null);

  const isNearBottom = useCallback(() => {
    const container = messagesEndRef.current?.parentElement;
    if (!container) return true;
    return container.scrollHeight - container.scrollTop - container.clientHeight < 120;
  }, []);

  const scrollToBottom = useCallback((force = false) => {
    if (force || isNearBottom()) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isNearBottom]);

  useEffect(() => {
    scrollToBottom();
  }, [messages.length]); // Only scroll when a new message is added, not on every stream update

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
          sessionId: sessionIdRef.current,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      const assistantId = (Date.now() + 1).toString();
      streamBufferRef.current = "";

      if (reader) {
        // Flush buffered stream content to state, throttled via rAF
        const flushBuffer = () => {
          const content = streamBufferRef.current;
          setMessages((prev) => {
            const existing = prev.find((m) => m.id === assistantId);
            if (existing) {
              return prev.map((m) =>
                m.id === assistantId ? { ...m, content } : m
              );
            }
            return [...prev, { role: "assistant", content, id: assistantId }];
          });
          scrollToBottom();
          rafRef.current = null;
        };

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          streamBufferRef.current += decoder.decode(value, { stream: true });

          // Schedule a single rAF flush — skip if one is already pending
          if (!rafRef.current) {
            rafRef.current = requestAnimationFrame(flushBuffer);
          }
        }

        // Final flush to ensure last chunk is rendered
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
        flushBuffer();
      }

      console.log("✅ Response received");
    } catch (err: any) {
      console.error("❌ Error sending message:", err);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };


  if (!isOpen) return null;

  return (
    <div className={styles.chatOverlay} onClick={onClose} aria-hidden="true">
      <div
        className={styles.chatContainer}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="AI Assistant chat"
        aria-hidden="false"
      >
        <div className={styles.chatHeader}>
          <div className={styles.headerContent}>
            <h3><span aria-hidden="true">💬</span> AI Assistant</h3>
            <div className={styles.modelSelector}>
              <label htmlFor="model-select" className="sr-only">Select AI model</label>
              <select
                id="model-select"
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
          <button onClick={onClose} className={styles.closeButton} aria-label="Close chat">
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <div className={styles.messagesContainer} aria-live="polite" aria-label="Chat messages">
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
                  <span aria-hidden="true">{message.role === "user" ? "👤" : "🤖"}</span>
                  {message.role === "user" ? " You" : " AI"}
                </div>
                <div className={styles.messageText}>{message.content}</div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className={`${styles.message} ${styles.assistantMessage}`}>
              <div className={styles.messageContent}>
                <div className={styles.messageRole}><span aria-hidden="true">🤖</span> AI</div>
                <div className={styles.typing} aria-label="AI is typing">
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
                <div className={styles.messageRole}><span aria-hidden="true">🤖</span> AI</div>
                <div className={styles.messageText} style={{ color: "red" }} role="alert">
                  Error: {error}
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className={styles.inputForm}>
          <label htmlFor="chat-input" className="sr-only">Type your message</label>
          <input
            id="chat-input"
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
            aria-label={isLoading ? "Sending message…" : "Send message"}
          >
            <span aria-hidden="true">{isLoading ? "⏳" : "📤"}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
