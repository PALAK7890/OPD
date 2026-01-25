import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/d_dash.css";
import Navbar from "./doc_nav";

export default function DoctorDash() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("token");
        // if (!token) {
        //   navigate("/login");
        //   return;
        // }

        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/doctor/appointments`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch appointments");
        }

        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [navigate]);

  return (
    <div className="doctor_dashboard">
      <Navbar />

      <main className="content">
        <h1>Doctor Dashboard</h1>
        <p>Today’s Appointments</p>

        {loading && <p>Loading appointments...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && appointments.length === 0 && (
          <p>No appointments today</p>
        )}

        <div className="appointments">
          {appointments.map((p) => (
            <div className="appointment-card" key={p._id}>
              <div className="appointment-info">
                <h3>{p.patientName}</h3>
                <span>{p.time}</span>
              </div>

              <span className={`status ${p.status.toLowerCase()}`}>
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
