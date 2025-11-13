import { useState } from "react";

function App() {
  const [query, setQuery] = useState("breaking bad");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchShows = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`
      );
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.log("Error:", err);
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>TVMaze Search</h1>

      <div style={styles.searchBox}>
        <input
          style={styles.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search TV shows..."
        />
        <button style={styles.button} onClick={searchShows}>
          Search
        </button>
      </div>

      {loading && <p style={{ color: "#ccc" }}>Loading...</p>}

      <div style={styles.grid}>
        {results.map((item) => {
          const show = item.show;
          return (
            <div key={show.id} style={styles.card}>
              <img
                src={show.image?.medium || "https://via.placeholder.com/210"}
                alt={show.name}
                style={styles.image}
              />
              <h3 style={styles.cardTitle}>{show.name}</h3>

              {show.network && (
                <p style={styles.meta}>
                  Network: {show.network?.name}
                </p>
              )}

              <p
                style={styles.summary}
                dangerouslySetInnerHTML={{ __html: show.summary }}
              ></p>

              <a
                href={show.url}
                style={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on TVMaze →
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#0f172a",
    minHeight: "100vh",
    color: "#e5e7eb",
    fontFamily: "Arial",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "32px",
    fontWeight: "bold",
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #475569",
    background: "#1e293b",
    color: "white",
    width: "300px",
  },
  button: {
    padding: "10px 16px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    background: "#1e293b",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #334155",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  meta: {
    color: "#94a3b8",
    fontSize: "14px",
    marginBottom: "8px",
  },
  summary: {
    color: "#cbd5e1",
    fontSize: "14px",
    maxHeight: "120px",
    overflow: "auto",
    marginBottom: "10px",
  },
  link: {
    marginTop: "auto",
    color: "#38bdf8",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default App;
