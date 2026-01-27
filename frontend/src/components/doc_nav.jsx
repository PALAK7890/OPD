import { useNavigate } from "react-router-dom";
import "../styles/doc_nav.css";

export default function DocNavbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return null;

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <aside className="navbar">
      <h2 className="logo">MediStack</h2>
      <nav className="nav-links">
        <span onClick={() => navigate("/doctor/dashboard")}>Dashboard</span>
        <span>Appointments</span>
        <span>Patients</span>
        <span>Profile</span>
      </nav>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </aside>
  );
}
