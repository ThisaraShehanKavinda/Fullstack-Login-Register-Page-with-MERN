import axios from 'axios';
import { useState } from "react";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const navigate = useNavigate()
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

const registerUser = async (e) => {
  e.preventDefault();
  const { name, email, password } = data;
  try {
    const { data: responseData } = await axios.post('/register', {
      name,
      email,
      password
    });
    if (responseData.error) {
      toast.error(responseData.error);
    } else {
      setData({ name: "", email: "", password: "" });
      toast.success('Registration successful. Welcome!');
      navigate('/login');
    }
  } catch (error) {
    console.log(error);
    toast.error("Registration failed. Please try again.");
  }
};


  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type="text" placeholder="Enter name..." value={data.name} onChange={(e)=> setData({...data, name: e.target.value})}/>

        <label>Email</label>
        <input type="email" placeholder="Enter email..." value={data.email} onChange={(e)=> setData({...data, email: e.target.value})}/>

        <label>Password</label>
        <input type="password" placeholder="Enter password..." value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}/>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
