import "./Intro.css";

function Intro() {
  return (
    <section className="intro">

      <div className="intro-card">

        <div className="divider top-divider">
          <span>◆</span>
        </div>

        <h1 className="sanskrit">
          कर्मण्येवाधिकारस्ते
          <br />
          मा फलेषु कदाचन।
        </h1>

        <p className="english">
          Focus on your actions.
          <br />
          The results will follow.
        </p>

        <p className="chapter">
          — Bhagavad Gita 2.47
        </p>

        <div className="divider bottom-divider">
          <span>◆</span>
        </div>

      </div>

    </section>
  );
}

export default Intro;