const Scatterplot = (props) => {
  return (
    <div style={{ position: "relative", width: 300, height: 120 }}>
      {props.pokemons.map((d, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: d.hp,
            top: d.attack,
            width: 16,
            height: 16,
            borderRadius: "50%",
            backgroundColor: "dodgerblue",
          }}
        />
      ))}
    </div>
  );
};

export default Scatterplot;