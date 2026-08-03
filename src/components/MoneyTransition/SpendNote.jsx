function SpendNote({ value, style }) {
  return (
    <div className="spend-note" style={style}>

      <span className="corner top-left">₹</span>
      <span className="corner top-right">₹</span>

      <div className="note-center">
        <h4>SpendWise</h4>
        <p>{value}</p>
      </div>

      <span className="corner bottom-left">₹</span>
      <span className="corner bottom-right">₹</span>

    </div>
  );
}

export default SpendNote;