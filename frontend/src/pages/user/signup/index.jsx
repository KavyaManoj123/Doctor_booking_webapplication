import Input from '../../../components/input';
import Button from '../../../components/Button';
import axios from '../../../utils/index.js';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './style.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    image: '',
    password: '',
    confirmPassword: '',
  });

  const getDepartment = async () => {
    const response = await axios.get('/user/signUp');

    const data = response.data.map(item => {
      return { label: item.name, value: item._id };
    });
    // console.log(data);
    setDepartments(data);
  };

  useEffect(() => {
    getDepartment();
  }, []);

  const onChange = async (e, key) => {
    if (key == 'image') {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      const response = await axios.post('/image', formData);
      if (response.data && response.data.url) {
        setSignupData({ ...signupData, image: response.data.url });
      }
    } else setSignupData({ ...signupData, [key]: e.target.value });
    console.log(signupData);
  };
  // console.log(signupData)
  const signup = async () => {
    const response = await axios.post('/user/signUp', signupData);
    toast.success('Signup successful, Please Login to continue', {
      onClose: () => {
        navigate('/user/login');
      },
      autoClose: 1000,
    });
  };

  return (
    <div className="doc-signup">
      <ToastContainer />
      <div className="doc-signup-form">
        <h1>Sign Up</h1>
        <Input placeholder="name" onChange={e => onChange(e, 'name')} />
        <Input placeholder="email" onChange={e => onChange(e, 'email')} />
        <Input
          placeholder="Image"
          type="file"
          onChange={e => onChange(e, 'image')}
        />

        <Input
          placeholder="password"
          type="password"
          onChange={e => onChange(e, 'password')}
        />
        <Input
          placeholder="confirm password"
          type="password"
          onChange={e => onChange(e, 'confirmPassword')}
        />
        <Button onClick={signup}>Sign Up</Button>
      </div>
    </div>
  );
};

export default SignUp;
