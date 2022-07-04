export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392ff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alighItems: "center"
  };

  return (
    <div style={containerStyle}>
      <p> - Inline Style - </p>
      <button>Fight!</button>
    </div>
  );
};
