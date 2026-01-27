import { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, role }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setToast(true);

      setTimeout(() => {
        if (data.user.role === "doctor") navigate("/doctor_dash");
        else if (data.user.role === "admin") navigate("/admin/dashboard");
        else navigate("/patient/dashboard");
      }, 1500);
    } catch {
      alert("Server error");
    }

    setLoading(false);
  };

  return (
  <div className="auth-wrapper">
    

    {/* Glass Login Section */}
    <div className="auth-login-glass">
      <div className="login-card">
        <h1>MediStack</h1>
        <p>Simple care. Trusted health.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />


<div className="role-cards">
  <div
    className={`role-card ${role === "patient" ? "active" : ""}`}
    onClick={() => setRole("patient")}
  >
    <div className="role-emoji">🧑‍⚕️</div>
    <span>Patient</span>
  </div>

  <div
    className={`role-card ${role === "doctor" ? "active" : ""}`}
    onClick={() => setRole("doctor")}
  >
    <div className="role-emoji">👨‍⚕️</div>
    <span>Doctor</span>
  </div>

  <div
    className={`role-card ${role === "admin" ? "active" : ""}`}
    onClick={() => setRole("admin")}
  >
    <div className="role-emoji">🛠️</div>
    <span>Admin</span>
  </div>
</div>


          <div className="forgot">
            <span onClick={() => navigate("/forgot-password")}>
              Forgot password?
            </span>
          </div>

          <button disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="social-login">
          <div className="icons">
            <FcGoogle size={26} />
            <FaGithub size={26} />
          </div>
        </div>

        <span onClick={() => navigate("/signin")}>
          Don’t have an account? Sign up
        </span>
      </div>
    </div>

    {toast && (
      <div className="login-toast">
        🎉 Logged in successfully!
      </div>
    )}
  </div>
);

}
