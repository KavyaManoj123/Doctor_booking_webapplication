import Input from '../../../components/input';
import Button from '../../../components/Button';
import axios from '../../../utils/index.js';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './style.css';

const login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {}, []);

  const onChange = async (e, key) => {
    setLoginData({ ...loginData, [key]: e.target.value });
  };
  // console.log(signupData)
  const login = async () => {
    const response = await axios.post('/user/login', loginData);
    if (response.data && response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    toast.success('Login successful', {
      onClose: () => {
        navigate('/user/home');
      },
      autoClose: 1000,
    });
  };

  return (
    <div className="doc-signup">
      <ToastContainer />
      <div className="doc-signup-form">
        <h1>Login for User</h1>

        <Input placeholder="email" onChange={e => onChange(e, 'email')} />
        <Input
          placeholder="password"
          type="password"
          onChange={e => onChange(e, 'password')}
        />

        <Button onClick={login}>Login</Button>
      </div>
    </div>
  );
};

export default login;
