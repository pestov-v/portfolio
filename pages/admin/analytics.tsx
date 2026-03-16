import { useState, useEffect, FormEvent } from "react";

interface Stats {
  totalPageViews: number;
  totalProjectClicks: number;
  totalResumeDownloads: number;
  byCountry: Record<string, number>;
  byCity: Record<string, number>;
  projectClicks: Record<string, number>;
  recentEvents: Array<{
    id: number;
    event_type: string;
    event_data: any;
    country: string | null;
    city: string | null;
    created_at: string;
  }>;
}

export default function AdminAnalytics() {
  const [secret, setSecret] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);
  const [days, setDays] = useState(30);
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
    fetch(
      `/api/analytics-dashboard?secret=${encodeURIComponent(secret)}&days=${days}`
    )
      .then((r) => {
        if (!r.ok) throw new Error("Invalid secret");
        return r.json();
      })
      .then(setStats)
      .catch((e) => {
        setError(e.message);
        setAuthenticated(false);
      })
      .finally(() => setLoading(false));
  }, [authenticated, secret, days]);

  if (!authenticated) {
    return (
      <div style={s.container}>
        <div style={s.loginCard}>
          <h1 style={s.title}>Analytics</h1>
          <form onSubmit={authenticate}>
            <input
              type="password"
              placeholder="Admin secret"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              style={s.input}
              autoFocus
            />
            <button type="submit" style={s.button}>
              Login
            </button>
          </form>
          {error && <p style={s.error}>{error}</p>}
        </div>
      </div>
    );
  }

  if (loading || !stats) {
    return (
      <div style={s.container}>
        <p style={s.muted}>Loading...</p>
      </div>
    );
  }

  const sortedCountries = Object.entries(stats.byCountry).sort(
    (a, b) => b[1] - a[1]
  );
  const sortedCities = Object.entries(stats.byCity).sort(
    (a, b) => b[1] - a[1]
  );
  const sortedProjects = Object.entries(stats.projectClicks).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <div style={s.container}>
      <div style={s.content}>
        <div style={s.header}>
          <h1 style={s.title}>Portfolio Analytics</h1>
          <div style={s.filters}>
            {[7, 14, 30, 90].map((d) => (
              <button
                key={d}
                onClick={() => setDays(d)}
                style={{
                  ...s.filterBtn,
                  ...(days === d ? s.filterBtnActive : {}),
                }}
              >
                {d}d
              </button>
            ))}
          </div>
        </div>

        {/* KPI Cards */}
        <div style={s.kpiRow}>
          <div style={s.kpiCard}>
            <div style={s.kpiValue}>{stats.totalPageViews}</div>
            <div style={s.kpiLabel}>Page Views</div>
          </div>
          <div style={s.kpiCard}>
            <div style={s.kpiValue}>{stats.totalProjectClicks}</div>
            <div style={s.kpiLabel}>Project Clicks</div>
          </div>
          <div style={s.kpiCard}>
            <div style={s.kpiValue}>{stats.totalResumeDownloads}</div>
            <div style={s.kpiLabel}>Resume Downloads</div>
          </div>
          <div style={s.kpiCard}>
            <div style={s.kpiValue}>
              {Object.keys(stats.byCountry).length}
            </div>
            <div style={s.kpiLabel}>Countries</div>
          </div>
        </div>

        {/* Tables */}
        <div style={s.grid}>
          <div style={s.tableCard}>
            <h3 style={s.tableTitle}>Top Countries</h3>
            {sortedCountries.map(([country, count]) => (
              <div key={country} style={s.tableRow}>
                <span>{country}</span>
                <span style={s.badge}>{count}</span>
              </div>
            ))}
            {sortedCountries.length === 0 && (
              <p style={s.muted}>No data yet</p>
            )}
          </div>

          <div style={s.tableCard}>
            <h3 style={s.tableTitle}>Top Cities</h3>
            {sortedCities.slice(0, 15).map(([city, count]) => (
              <div key={city} style={s.tableRow}>
                <span>{city}</span>
                <span style={s.badge}>{count}</span>
              </div>
            ))}
            {sortedCities.length === 0 && <p style={s.muted}>No data yet</p>}
          </div>

          <div style={s.tableCard}>
            <h3 style={s.tableTitle}>Project Clicks</h3>
            {sortedProjects.map(([name, count]) => (
              <div key={name} style={s.tableRow}>
                <span>{name}</span>
                <span style={s.badge}>{count}</span>
              </div>
            ))}
            {sortedProjects.length === 0 && (
              <p style={s.muted}>No data yet</p>
            )}
          </div>
        </div>

        {/* Recent Events */}
        <div style={s.tableCard}>
          <h3 style={s.tableTitle}>Recent Events</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>Time</th>
                  <th style={s.th}>Event</th>
                  <th style={s.th}>Details</th>
                  <th style={s.th}>Country</th>
                  <th style={s.th}>City</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentEvents.map((e) => (
                  <tr key={e.id}>
                    <td style={s.td}>
                      {new Date(e.created_at).toLocaleString()}
                    </td>
                    <td style={s.td}>
                      <span
                        style={{
                          ...s.eventBadge,
                          background:
                            e.event_type === "page_view"
                              ? "#1e3a5f"
                              : e.event_type === "project_click"
                              ? "#1e4d3a"
                              : "#4d1e3a",
                        }}
                      >
                        {e.event_type}
                      </span>
                    </td>
                    <td style={s.td}>
                      {e.event_data?.projectName ||
                        e.event_data?.path ||
                        "—"}
                    </td>
                    <td style={s.td}>{e.country || "—"}</td>
                    <td style={s.td}>{e.city || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
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
  title: { margin: "0", fontSize: "1.5rem" },
  input: {
    width: "100%",
    padding: "0.75rem",
    background: "#2a2a2a",
    border: "1px solid #333",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "1rem",
    marginTop: "1.5rem",
    marginBottom: "1rem",
    boxSizing: "border-box" as const,
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
  muted: { color: "#666" },
  content: { width: "100%", maxWidth: "1200px", padding: "1.5rem" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
  filters: { display: "flex", gap: "0.5rem" },
  filterBtn: {
    padding: "0.4rem 0.8rem",
    background: "#1a1a1a",
    border: "1px solid #333",
    borderRadius: "6px",
    color: "#999",
    cursor: "pointer",
    fontSize: "0.85rem",
  },
  filterBtnActive: { borderColor: "#3b82f6", color: "#3b82f6" },
  kpiRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  kpiCard: {
    background: "#1a1a1a",
    borderRadius: "10px",
    padding: "1.25rem",
    textAlign: "center" as const,
  },
  kpiValue: { fontSize: "2rem", fontWeight: 700, color: "#fff" },
  kpiLabel: { fontSize: "0.8rem", color: "#888", marginTop: "0.25rem" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  tableCard: {
    background: "#1a1a1a",
    borderRadius: "10px",
    padding: "1rem",
    marginBottom: "1rem",
  },
  tableTitle: { margin: "0 0 0.75rem", fontSize: "1rem" },
  tableRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.4rem 0",
    borderBottom: "1px solid #222",
    fontSize: "0.9rem",
  },
  badge: {
    background: "#2a2a2a",
    padding: "1px 8px",
    borderRadius: "4px",
    fontSize: "0.8rem",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: "0.85rem",
  },
  th: {
    textAlign: "left" as const,
    padding: "0.5rem",
    borderBottom: "1px solid #333",
    color: "#888",
    fontWeight: 500,
  },
  td: { padding: "0.5rem", borderBottom: "1px solid #1a1a1a" },
  eventBadge: {
    padding: "2px 8px",
    borderRadius: "4px",
    fontSize: "0.75rem",
  },
};
