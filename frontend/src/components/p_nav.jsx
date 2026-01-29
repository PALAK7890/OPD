import "../styles/p_nav.css";

export default function PatientNavbar() {
  return (
    <div className="patient-navbar">
      {/* Left */}
      <div className="nav-left">
        <h2>HealthCare+</h2>
      </div>

      {/* Center */}
      <div className="nav-center">
        <input 
          type="text" 
          placeholder="Search doctors, specialization..."
        />
      </div>

      {/* Right */}
      <div className="nav-right">
        <span className="notification">🔔</span>

        <div className="patient-profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="patient"
          />
          <span>Palak</span>
        </div>

        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
}
