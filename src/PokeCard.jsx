const PokeCard = ({children, color, id}) => {
  return (
    <>
    <div style={{
         border: "1px solid #9c9c9c",
            width: 250,
            height: 100,
            padding: 12, 
            paddingTop: 12, 
            margin: 4,
            marginTop: 8,
            borderRadius: 4, 
            opacity: 1,
            color: "black",
            backgroundColor: color,
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            fontWeight: "bold",
      }}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={children} width={100} height={100} />
      {children}
    </div>
    </>
  );
};

export default PokeCard
