const Roster = ({ roster, maxSize, onRemove, pokemonColors }) => {
  const slots = Array.from({ length: maxSize }, (_, i) => roster[i] || null);

  return (
    <div style={{
      position: "fixed",
      right: 0,
      top: 0,
      width: 220,
      height: "100vh",
      backgroundColor: "#1a1a2e",
      borderLeft: "3px solid #e94560",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "16px 8px",
      boxSizing: "border-box",
      zIndex: 100,
    }}>
      <h3 style={{ color: "#fff", margin: "0 0 4px 0", fontSize: 16 }}>YOUR TEAM</h3>
      <div style={{ color: "#aaa", fontSize: 13, marginBottom: 12 }}>
        {roster.length} / {maxSize} chosen
      </div>
      {slots.map((poke, i) => (
        <div
          key={i}
          style={{
            width: 190,
            height: 80,
            margin: "6px 0",
            borderRadius: 8,
            border: poke ? `2px solid ${pokemonColors[poke.type]}` : "2px dashed #555",
            backgroundColor: poke ? pokemonColors[poke.type] : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: poke ? "flex-start" : "center",
            padding: poke ? "0 8px" : 0,
            boxSizing: "border-box",
            transition: "all 0.3s ease",
          }}
        >
          {poke ? (
            <>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
                alt={poke.name}
                width={64}
                height={64}
              />
              <div style={{ flex: 1, textAlign: "left" }}>
                <div style={{ fontWeight: "bold", fontSize: 13, color: "#000" }}>{poke.name}</div>
                <div style={{ fontSize: 11, color: "#333" }}>{poke.type}</div>
              </div>
              <button
                onClick={() => onRemove(poke.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#c00",
                  cursor: "pointer",
                  fontSize: 18,
                  fontWeight: "bold",
                  padding: "0 4px",
                }}
                title="Remove"
              >
                ✕
              </button>
            </>
          ) : (
            <span style={{ color: "#555", fontSize: 13, fontStyle: "italic" }}>
              Slot {i + 1} — empty
            </span>
          )}
        </div>
      ))}
      {roster.length === maxSize && (
        <div style={{
          marginTop: 16,
          color: "#e94560",
          fontWeight: "bold",
          fontSize: 14,
          textAlign: "center",
        }}>
          Team is full!
        </div>
      )}
    </div>
  );
};

export default Roster;
