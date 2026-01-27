import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/auth"
import "../styles/doc_nav.css"

export default function DocNavbar() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate("/login")
  };

  return (
    <aside className="navbar">
      <div className="navbar-top">
        <h2 className="logo">MediStack</h2>

        <nav className="nav-links">
          <span onClick={() => navigate(`/${user.role}/dashboard`)}>
            Dashboard
          </span>
          {user.role === "doctor" && (
            <>
              <span>Appointments</span>
              <span>Patients</span>
            </>
          )}
          <span>Profile</span>
        </nav>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </aside>
  )
}
