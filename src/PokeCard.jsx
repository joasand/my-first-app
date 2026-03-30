import { useState } from "react";

const PokeCard = ({children, color, id, onClick, disabled, selected}) => {
  const [catching, setCatching] = useState(false);

  const handleClick = () => {
    if (disabled || catching || selected) return;
    setCatching(true);
    setTimeout(() => {
      setCatching(false);
      onClick?.();
    }, 800);
  };

  return (
    <div
      onClick={handleClick}
      className={catching ? "pokecard catching" : "pokecard"}
      style={{
        border: selected ? "3px solid #333" : "1px solid #9c9c9c",
        width: 250,
        height: 100,
        padding: 12,
        paddingTop: 12,
        margin: 4,
        marginTop: 8,
        borderRadius: 4,
        opacity: disabled ? 0.4 : 1,
        color: "black",
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        fontWeight: "bold",
        cursor: disabled || selected ? "default" : "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {catching && (
        <div className="pokeball-overlay">
          <div className="pokeball">
            <div className="pokeball-top"></div>
            <div className="pokeball-middle"></div>
            <div className="pokeball-bottom"></div>
          </div>
        </div>
      )}
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={children} width={100} height={100} />
      {children}
    </div>
  );
};

export default PokeCard
