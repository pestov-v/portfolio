import { useState, useEffect, FormEvent, useRef } from "react";

interface ChatSession {
  sessionId: string;
  messageCount: number;
  model: string;
  updatedAt: string;
  preview: string;
}

interface Message {
  role: string;
  content: string;
}

interface SessionDetail {
  sessionId: string;
  messages: Message[];
  model: string;
  updatedAt: string;
}

export default function AdminChats() {
  const [secret, setSecret] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<SessionDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const authenticate = (e: FormEvent) => {
    e.preventDefault();
    if (secret.trim()) {
      setAuthenticated(true);
      setError("");
    }
  };

  useEffect(() => {
    if (!authenticated) return;
    setLoading(true);
    fetch(`/api/chat-history?secret=${encodeURIComponent(secret)}`)
      .then(async (r) => {
        if (r.status === 401) throw new Error("Wrong password");
        const body = await r.json().catch(() => ({}));
        if (!r.ok) throw new Error(body.error || `Server error ${r.status}`);
        return r.json();
      })
      .then(setSessions)
      .catch((e) => {
        setError(e.message);
        setAuthenticated(false);
      })
      .finally(() => setLoading(false));
  }, [authenticated, secret]);

  const loadSession = async (sessionId: string) => {
    const r = await fetch(
      `/api/chat-history?secret=${encodeURIComponent(secret)}&sessionId=${sessionId}`
    );
    if (r.ok) setSelectedSession(await r.json());
  };

  const deleteSession = async (sessionId: string) => {
    if (!confirm("Delete this session?")) return;
    await fetch(
      `/api/chat-history?secret=${encodeURIComponent(secret)}&sessionId=${sessionId}`,
      { method: "DELETE" }
    );
    setSessions((prev) => prev.filter((s) => s.sessionId !== sessionId));
    if (selectedSession?.sessionId === sessionId) setSelectedSession(null);
  };

  if (!authenticated) {
    return (
      <div style={styles.container}>
        <div style={styles.loginCard}>
          <h1 style={styles.title}>Chat Admin</h1>
          <form onSubmit={authenticate}>
            <div style={styles.inputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Admin secret"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                style={styles.input}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                style={styles.eyeBtn}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>
          {error && <p style={styles.error}>{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.layout}>
        <div style={styles.sidebar}>
          <h2 style={styles.sidebarTitle}>
            Chat Sessions ({sessions.length})
          </h2>
          {loading && <p style={styles.muted}>Loading...</p>}
          {sessions.map((s) => (
            <div
              key={s.sessionId}
              style={{
                ...styles.sessionCard,
                ...(selectedSession?.sessionId === s.sessionId
                  ? styles.sessionCardActive
                  : {}),
              }}
              onClick={() => loadSession(s.sessionId)}
            >
              <div style={styles.sessionHeader}>
                <span style={styles.badge}>{s.model}</span>
                <span style={styles.muted}>{s.messageCount} msgs</span>
              </div>
              <p style={styles.preview}>{s.preview || "Empty session"}</p>
              <div style={styles.sessionFooter}>
                <span style={styles.date}>
                  {new Date(s.updatedAt).toLocaleString()}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteSession(s.sessionId);
                  }}
                  style={styles.deleteBtn}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {!loading && sessions.length === 0 && (
            <p style={styles.muted}>No chat sessions yet</p>
          )}
        </div>

        <div style={styles.main}>
          {selectedSession ? (
            <>
              <h2 style={styles.mainTitle}>
                Session: {selectedSession.model} —{" "}
                {new Date(selectedSession.updatedAt).toLocaleString()}
              </h2>
              <div style={styles.messages}>
                {selectedSession.messages.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      ...styles.message,
                      ...(m.role === "user"
                        ? styles.userMsg
                        : styles.assistantMsg),
                    }}
                  >
                    <strong>{m.role === "user" ? "User" : "AI"}:</strong>
                    <pre style={styles.messageText}>{m.content}</pre>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div style={styles.empty}>
              <p style={styles.muted}>Select a session to view messages</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    background: "#0a0a0a",
    color: "#e0e0e0",
    fontFamily: "system-ui, sans-serif",
    display: "flex",
    justifyContent: "center",
  },
  loginCard: {
    marginTop: "20vh",
    padding: "2rem",
    background: "#1a1a1a",
    borderRadius: "12px",
    width: "320px",
    height: "fit-content",
  },
  title: { margin: "0 0 1.5rem", fontSize: "1.5rem" },
  inputWrapper: {
    position: "relative",
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.75rem 3rem 0.75rem 0.75rem",
    background: "#2a2a2a",
    border: "1px solid #333",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "1rem",
    boxSizing: "border-box",
  },
  eyeBtn: {
    position: "absolute",
    right: "0.75rem",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    color: "#999",
    cursor: "pointer",
    padding: "0",
    display: "flex",
    alignItems: "center",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    background: "#3b82f6",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
  },
  error: { color: "#ef4444", marginTop: "1rem" },
  layout: { display: "flex", width: "100%", maxWidth: "1200px", gap: "1rem", padding: "1rem" },
  sidebar: {
    width: "360px",
    flexShrink: 0,
    overflowY: "auto",
    maxHeight: "100vh",
    paddingRight: "0.5rem",
  },
  sidebarTitle: { margin: "0 0 1rem", fontSize: "1.2rem" },
  sessionCard: {
    padding: "0.75rem",
    background: "#1a1a1a",
    borderRadius: "8px",
    marginBottom: "0.5rem",
    cursor: "pointer",
    border: "1px solid #2a2a2a",
  },
  sessionCardActive: { borderColor: "#3b82f6" },
  sessionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.25rem",
  },
  badge: {
    fontSize: "0.7rem",
    background: "#2a2a2a",
    padding: "2px 6px",
    borderRadius: "4px",
  },
  preview: {
    margin: "0.25rem 0",
    fontSize: "0.85rem",
    color: "#999",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  sessionFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: { fontSize: "0.75rem", color: "#666" },
  deleteBtn: {
    fontSize: "0.75rem",
    color: "#ef4444",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "2px 4px",
  },
  main: { flex: 1, minWidth: 0 },
  mainTitle: { margin: "0 0 1rem", fontSize: "1.1rem" },
  messages: { display: "flex", flexDirection: "column", gap: "0.75rem" },
  message: { padding: "0.75rem", borderRadius: "8px" },
  userMsg: { background: "#1a2a3a" },
  assistantMsg: { background: "#1a1a2a" },
  messageText: {
    margin: "0.5rem 0 0",
    whiteSpace: "pre-wrap",
    fontFamily: "inherit",
    fontSize: "0.9rem",
    lineHeight: 1.5,
  },
  muted: { color: "#666", fontSize: "0.9rem" },
  empty: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
  },
};
