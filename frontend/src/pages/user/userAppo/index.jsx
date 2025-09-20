import { useState, useEffect } from 'react';
import axios from '../../../utils/index';
import { getId } from '../../../utils/index2';
import './style.css';

const Appoint = () => {
  const [userAppo, setUserAppo] = useState([]);

  const getAppo = async () => {
    const response = await axios.get(`/appointment/user/${getId()}`);
    setUserAppo(response.data);
    // console.log(response.data);
  };

  console.log(userAppo[0]);

  useEffect(() => {
    getAppo();
  }, []);

  return (
    <div className="user-appo">
      <h1>Appointments</h1>

      {userAppo.map(item => {
        return (
          <div className="app-card" key={item._id}>
            <p>{item.slot}</p>
            <p>{item.user}</p>
            <p>{item.docter}</p>
            <p>{item.status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Appoint;
