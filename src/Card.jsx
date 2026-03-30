const Card = ({children}) => {
  return (
    <div style={{
         border: "1px solid #9c9c9c",
            width: 250,
            padding: 12, 
            borderRadius: 4, 
            color: "#9c9c9c",
      }}>
      {children}
    </div>
  );
};

export default Card
