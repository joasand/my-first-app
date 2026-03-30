const FilterCard = ({children, color, selected, onClick}) => {
  return (
    <>
    <div onClick={onClick} style={{
         border: selected ? "3px solid #333" : "1px solid #9c9c9c",
         cursor: "pointer",
            width: 75,
            height: 10,
            padding: 12, 
            margin: 4,
            borderRadius: 4, 
            color: "black",
            backgroundColor: color,
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            fontStyle: "italic",
      }}>
      {children}
    </div>
    </>
  );
};

export default FilterCard
