import { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient"); // patient | doctor | admin
  const [toast, setToast] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/signin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            password,
            role,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setToast(true);
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        alert(data.error || "Signup failed");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1>MediStack</h1>
        <p>Simple care. Trusted health.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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


          <button>Sign up</button>
        </form>

        <div className="social-login">
          <div className="icons">
            <FcGoogle size={26} />
            <FaGithub size={26} />
          </div>
        </div>

        <div className="register-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </div>
      </div>

      {toast && (
        <div className="login-toast">
          🎉 Account created successfully!
        </div>
      )}
    </div>
  );
}
