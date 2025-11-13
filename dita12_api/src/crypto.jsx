import { useEffect, useState } from "react";

export default function Crypto() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setErr("");
        const res = await fetch("https://api.coinpaprika.com/v1/tickers");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setCoins(data.slice(0, 10)); // vetem 10 coinët e parë
      } catch (e) {
        setErr(e.message || "Gabim gjatë marrjes së të dhënave");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        padding: 16,
        background: "#0b1220",
        minHeight: "100vh",
        color: "#e5e7eb",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>💰 CoinPaprika API Demo</h1>

      {loading && <div>Duke ngarkuar të dhënat…</div>}
      {err && <div style={{ color: "crimson" }}>⚠️ {err}</div>}

      {!loading && !err && (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#111827",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <thead style={{ background: "#1f2937" }}>
            <tr>
              <th style={{ padding: 10, textAlign: "left" }}>#</th>
              <th style={{ padding: 10, textAlign: "left" }}>Name</th>
              <th style={{ padding: 10, textAlign: "left" }}>Symbol</th>
              <th style={{ padding: 10, textAlign: "right" }}>Price (USD)</th>
              <th style={{ padding: 10, textAlign: "right" }}>Change 24h</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, i) => (
              <tr
                key={coin.id}
                style={{
                  borderBottom: "1px solid #1f2937",
                  background: i % 2 ? "#0f172a" : "#111827",
                }}
              >
                <td style={{ padding: 10 }}>{i + 1}</td>
                <td style={{ padding: 10 }}>{coin.name}</td>
                <td style={{ padding: 10 }}>{coin.symbol}</td>
                <td style={{ padding: 10, textAlign: "right" }}>
                  ${coin.quotes?.USD?.price.toFixed(4)}
                </td>
                <td
                  style={{
                    padding: 10,
                    textAlign: "right",
                    color:
                      coin.quotes?.USD?.percent_change_24h >= 0
                        ? "limegreen"
                        : "crimson",
                  }}
                >
                  {coin.quotes?.USD?.percent_change_24h.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{ marginTop: 20, textAlign: "center", fontSize: 12, opacity: 0.6 }}>
        Burimi: <a href="https://api.coinpaprika.com" style={{ color: "#93c5fd" }}>CoinPaprika API</a> · Falas, pa API key
      </div>
    </div>
  );
}
