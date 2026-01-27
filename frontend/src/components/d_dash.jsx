import { useEffect, useState } from "react";
import DocNavbar from "./doc_nav";
import "../styles/d_dash.css";

export default function DoctorDash() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // later: fetch from backend
    setLoading(false);
  }, []);

  return (
    <div className="doctor-dashboard">
      <DocNavbar />

      <main className="dashboard-content">
        <h1>👨‍⚕️ Doctor Dashboard</h1>
        <p className="subtitle">Today’s overview</p>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total</h3>
            <span>{appointments.length}</span>
          </div>

          <div className="stat-card pending">
            <h3>Pending</h3>
            <span>
              {appointments.filter(a => a.status === "Pending").length}
            </span>
          </div>

          <div className="stat-card completed">
            <h3>Completed</h3>
            <span>
              {appointments.filter(a => a.status === "Completed").length}
            </span>
          </div>
        </div>

        {/* Appointments */}
        <section className="appointments-section">
          <h2>Appointments</h2>

          {loading && <p>Loading appointments...</p>}
          {error && <p className="error">{error}</p>}

          {!loading && appointments.length === 0 && (
            <p className="empty">No appointments today</p>
          )}

          <div className="appointment-list">
            {appointments.map((a) => (
              <div key={a._id} className="appointment-card">
                <div>
                  <h4>{a.patientName}</h4>
                  <span>{a.time}</span>
                </div>

                <span className={`status ${a.status.toLowerCase()}`}>
                  {a.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
