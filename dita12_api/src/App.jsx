import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("Prizren");
  const [units, setUnits] = useState("metric"); // metric = °C, imperial = °F
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const API_KEY = "19c53d830458075a54d21b1f1bd81baf"; // <-- fut API key këtu

  const fetchWeather = async (q) => {
    const query = q?.trim() || city.trim();
    if (!query) return;
    setLoading(true);
    setErr("");
    setData(null);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        query
      )}&appid=${API_KEY}&units=${units}`;
      const res = await fetch(url);
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        const msg =
          body?.message || `Kerkesa dështoi (${res.status} ${res.statusText})`;
        throw new Error(msg);
      }
      const json = await res.json();
      setData(json);
    } catch (e) {
      setErr(e.message || "Gabim i panjohur");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  const toggleUnits = () => {
    setUnits((u) => (u === "metric" ? "imperial" : "metric"));
  };

  const tempUnit = units === "metric" ? "°C" : "°F";
  const speedUnit = units === "metric" ? "m/s" : "mph";

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        background: "#0f172a",
        color: "#e2e8f0",
        padding: "24px",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          background: "#111827",
          borderRadius: 16,
          padding: 20,
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        <h1 style={{ margin: 0, marginBottom: 12, fontSize: 24 }}>
          Weather Finder
        </h1>

        <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
          <input
            type="text"
            placeholder="Shkruaj qytetin (p.sh. Prizren)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            style={{
              flex: 1,
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid #374151",
              background: "#0b1220",
              color: "white",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "none",
              background: "#2563eb",
              color: "white",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Kërko
          </button>
        </form>

        <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
          <button
            onClick={toggleUnits}
            style={{
              padding: "8px 10px",
              borderRadius: 10,
              border: "1px solid #374151",
              background: "#0b1220",
              color: "white",
              cursor: "pointer",
            }}
            title="Ndërro °C/°F"
          >
            Njësitë: {units === "metric" ? "°C" : "°F"}
          </button>
          <button
            onClick={() => fetchWeather(city)}
            style={{
              padding: "8px 10px",
              borderRadius: 10,
              border: "1px solid #374151",
              background: "#0b1220",
              color: "white",
              cursor: "pointer",
            }}
          >
            Rifresko
          </button>
        </div>

        {loading && (
          <p style={{ marginTop: 16, opacity: 0.8 }}>Duke marrë të dhënat…</p>
        )}
        {err && (
          <p style={{ marginTop: 16, color: "#f87171" }}>
            Gabim: {err === "city not found" ? "Qyteti nuk u gjet" : err}
          </p>
        )}

        {data && (
          <div
            style={{
              marginTop: 16,
              padding: 16,
              borderRadius: 12,
              background: "#0b1220",
              border: "1px solid #1f2937",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 8,
              }}
            >
              <h2 style={{ margin: 0 }}>
                {data.name}, {data.sys?.country}
              </h2>
              {data.weather?.[0]?.icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt={data.weather?.[0]?.description || "icon"}
                  width={56}
                  height={56}
                />
              )}
            </div>

            <div style={{ fontSize: 36, fontWeight: 700 }}>
              {Math.round(data.main?.temp)}
              {tempUnit}
            </div>
            <div style={{ opacity: 0.9, marginTop: 4 }}>
              {data.weather?.[0]?.description}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                marginTop: 12,
              }}
            >
              <div
                style={{
                  background: "#0a0f1a",
                  padding: 10,
                  borderRadius: 10,
                  border: "1px solid #1f2937",
                }}
              >
                <div style={{ opacity: 0.7, fontSize: 12 }}>Ndjehet si</div>
                <div style={{ fontWeight: 600 }}>
                  {Math.round(data.main?.feels_like)}
                  {tempUnit}
                </div>
              </div>
              <div
                style={{
                  background: "#0a0f1a",
                  padding: 10,
                  borderRadius: 10,
                  border: "1px solid #1f2937",
                }}
              >
                <div style={{ opacity: 0.7, fontSize: 12 }}>Lagështia</div>
                <div style={{ fontWeight: 600 }}>{data.main?.humidity}%</div>
              </div>
              <div
                style={{
                  background: "#0a0f1a",
                  padding: 10,
                  borderRadius: 10,
                  border: "1px solid #1f2937",
                }}
              >
                <div style={{ opacity: 0.7, fontSize: 12 }}>Era</div>
                <div style={{ fontWeight: 600 }}>
                  {data.wind?.speed} {speedUnit}
                </div>
              </div>
              <div
                style={{
                  background: "#0a0f1a",
                  padding: 10,
                  borderRadius: 10,
                  border: "1px solid #1f2937",
                }}
              >
                <div style={{ opacity: 0.7, fontSize: 12 }}>Presioni</div>
                <div style={{ fontWeight: 600 }}>{data.main?.pressure} hPa</div>
              </div>
            </div>

            {data.coord && (
              <div style={{ marginTop: 10, opacity: 0.8, fontSize: 12 }}>
                Koordinatat: {data.coord.lat}, {data.coord.lon}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
