import { useState, useEffect } from 'react';
import Card from '../../../components/Card';
import axios from '../../../utils/index';
import { useNavigate } from 'react-router-dom';
import './style.css';

const UserHome = () => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);

  const getDepartment = async () => {
    const response = await axios.get('/department');

    const data = response.data.map(item => {
      return {
        image: item.image,
        name: item.name,
        description: item.description,
        id: item._id,
      };
    });
    // console.log(data);
    setDepartments(data);
  };

  useEffect(() => {
    getDepartment();
  }, []);

  const cardClick = id => {
    navigate(`/doctor/dep/${id}`);
  };

  return (
    <div className="use-profile1">
      <h1 className="dep">Departments</h1>
      <div className="use-profile">
        {departments.map(item => (
          <Card
            key={item.id}
            onClick={() => {
              cardClick(item.id);
            }}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default UserHome;
