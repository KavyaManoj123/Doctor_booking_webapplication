import { useState, useEffect } from 'react';
import axios from '../../../utils/index';
import { useParams } from 'react-router-dom';
import { getId } from '../../../utils/index2';
import Navbar from '../../../components/Navbar1';
import './style.css';

const doctorProfileSlot = () => {
  const [doctor, setDoctor] = useState([]);
  const [slots, setSlots] = useState([]);
  const { id } = useParams();

  const getDoctor = async () => {
    const response = await axios.get(`/doctor/${id}`);
    setDoctor(response.data);
  };

  console.log(slots);

  const soltById = async () => {
    const response = await axios.get(`/slot/doc/${id}`);
    setSlots(response.data);
  };
  const onBookSlot = async slotId => {
    const data = {
      doctor: id,
      slot: slotId,
      user: getId(),
    };
    const response = await axios.post('/appointment', data);
    soltById();
    // console.log(getId());
  };
  const onCancelSlot = async (slotId) => {
    try {
      const response = await axios.patch(`/slot/${slotId}`,{status:'FREE'});
      soltById();
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    getDoctor();
    soltById();
  }, []);

  return (
    <div className="doc-main">
      <Navbar />
      <div className="doc-pro">
        <div className="prof-doc">
          <img src={doctor.image} alt="" />
          <h1>{doctor.name}</h1>
          <h3>{doctor.email}</h3>
        </div>

        <div className="doc-slot">
          <h1>slots</h1>
          <div className="slot-list">
            {slots.map(item => {
              return (
                <div
                  key={item._id}
                  className={`slots-doc ${
                    item.status == 'BOOKED' ? 'booked' : ''
                  }`}
                  onClick={() =>
                    item.status == 'BOOKED'
                      ? onCancelSlot(item._id)
                      : onBookSlot(item._id)
                  }
                >
                  <p>{item.time}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default doctorProfileSlot;
