import axios from 'axios';
import { useState } from "react";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // <-- Add this line

export default function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data: responseData } = await axios.post('/login', {
        email,
        password
      });
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({ email: "", password: "" });
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={loginUser} className="login-form">
        <h2 className="form-title">Welcome Back</h2>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
}
