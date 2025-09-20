import { useState, useEffect } from 'react';
import Card from '../../../components/Card';
import axios from '../../../utils/index';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './style.css';

const depDoc = () => {
  const navigate = useNavigate();
  const [depdoctor, setDepdoctor] = useState([]);
  const { depId } = useParams();

  const getDoctor = async () => {
    const response = await axios.get(`/doctor/dep/${depId}`);
    const data = response.data.map(item => {
      return {
        image: item.image,
        name: item.name,
        id:item._id
      };
    });
    // console.log(response);
    setDepdoctor(data);
  };

  useEffect(() => {
    getDoctor();
  }, []);

  console.log(depdoctor)

  const cardClick = id => {
    navigate(`/doctor/prof/${id}`);
  };
  return (
    <div className="dep-doc">
      <h1>Doctors</h1>
      {depdoctor.map(item => (
        <Card
          onClick={() => {
            cardClick(item.id);
          }}
          image={item.image}
          name={item.name}
        />
      ))}
    </div>
  );
};
export default depDoc;
