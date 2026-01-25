import { useNavigate } from "react-router-dom";
import "../styles/doc_nav.css";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <aside className="navbar">
      <div>
        <h2>MediStack</h2>

        <nav className="nav-links">
          <span className="active">Dashboard</span>
          <span>Appointments</span>
          <span>Patients</span>
          <span>Profile</span>
        </nav>
      </div>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </aside>
  );
}
