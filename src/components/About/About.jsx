import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-left">

        <p className="about-tag">
          ABOUT SPENDWISE
        </p>

        <h2>
          One platform to manage
          <br />
          all your personal finances.
        </h2>

        <p className="about-text">
          SpendWise helps students, professionals and families
          easily track expenses, manage budgets, split bills,
          and achieve savings goals without complicated
          spreadsheets.
        </p>

      

      </div>

      <div className="about-right">

        <div className="about-box">

          <h3> Why SpendWise?</h3>
           <h4>"Every great product starts by solving a real-life problem."</h4>
          <p>
            The idea for SpendWise came from my own experiences with friends. After every outing, we would spend a long time figuring out who paid for what and how much each person owed. Most of us also couldn't remember where our money had gone by the end of the month. I wanted to build a solution that could track daily expenses, simplify bill splitting, and help people develop better financial habits without the stress of manual calculations.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;