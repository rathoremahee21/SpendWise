import "./MoneyTransition.css";
import SpendNote from "./SpendNote";

function MoneyTransition() {
  const notes = [
    {
      top: "18%",
      delay: "0s",
      duration: "2.4s",
      rotate: "-8deg",
      value: "₹500",
    },
    {
      top: "38%",
      delay: "0.35s",
      duration: "2.7s",
      rotate: "7deg",
      value: "₹200",
    },
    {
      top: "60%",
      delay: "0.7s",
      duration: "2.6s",
      rotate: "-10deg",
      value: "₹100",
    },
    {
      top: "80%",
      delay: "1s",
      duration: "2.8s",
      rotate: "8deg",
      value: "₹2000",
    },
  ];

  return (
    <div className="transition-container">

      <div className="transition-text">
        <h1>SpendWise</h1>
        <p>Preparing your finances...</p>
      </div>

      {notes.map((note, index) => (
        <SpendNote
          key={index}
          value={note.value}
          style={{
            top: note.top,
            animationDelay: note.delay,
            animationDuration: note.duration,
            "--rotation": note.rotate,
          }}
        />
      ))}

    </div>
  );
}

export default MoneyTransition;