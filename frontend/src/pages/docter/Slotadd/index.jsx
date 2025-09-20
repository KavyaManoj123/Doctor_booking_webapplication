import axios from 'axios';
import Input from '../../../components/input';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './style.css';


const slotAdd = () => {
  const [slotAdded, setSlotAdded] = useState({
    doctor: '',
    time: '',
  });

  const onChange = async (e, key) => {
    setSlotAdded({ ...slotAdded, [key]: e.target.value });
  };

  const addedSlot = async () => {
    const response = await axios.post('/slot', slotAdded);
    if (response.data && response.data.token) {
      localStorage.setItem('token', response.data.token);
    }

    toast.success('Login successful', {
      autoClose: 1000,
    });
  };

  useEffect(() => {}, []);

  return (
    <div className="slot-added">
        <ToastContainer/>
      <div className="doc-signup-form">
        <h1>Add Slot</h1>
        <Input placeholder="Doctor" onChange={e => onChange(e, 'Doctor')} />
        <Input placeholder="Time" onChange={e => onChange(e, 'Time')} />
        <button onClick={addedSlot} className="slot-btn">
          ADD
        </button>
      </div>
    </div>
  );
};

export default slotAdd;
