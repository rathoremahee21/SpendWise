import "./Topbar.css";

function Topbar() {
  return (
    <header className="topbar">

      <div className="topbar-left">
        <h1>Good Evening, Mahee! </h1>
        <p>Track, manage and grow your money smarter.</p>
      </div>

      <div className="topbar-right">

        <input
          type="text"
          placeholder="Search transactions..."
        />

        <button className="icon-btn"></button>

        <button className="icon-btn"></button>

        <div className="profile-circle">
          M
        </div>

      </div>

    </header>
  );
}

export default Topbar;