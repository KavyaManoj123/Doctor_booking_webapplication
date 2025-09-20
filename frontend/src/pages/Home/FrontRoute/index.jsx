import Logo from '../../../components/logo';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './style.css';

const Front = () => {
  const navigate = useNavigate();

  const docClick = () => {
    navigate('/doctor/login');
  };

  const userClick = () => {
    navigate('/user/login');
  };

  return (
    <div className="warpper">
      <div className="main-side">
        <Logo />
        <div className="nav-side">
          <p>Home</p>
          <p>About</p>
          <p>Service</p>
          <p>Contact As</p>
          <p></p>
        </div>
      </div>
      <div className="center-box">
        <div className="login-side">
          <img src="finalLogo.png" alt="" />
          <div className="two-btn">
            <motion.button
              whileHover={{ scale: 1.5, backgroundColor: 'green' }}
              className="btn-1"
              onClick={docClick}
            >
              Login as Docter
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.5, backgroundColor: 'green' }}
              className="btn-2"
              onClick={userClick}
            >
              Login as User
            </motion.button>
          </div>
          <p>
            Don't have an Accout?<a href="/doctor/signup">SignUp as Doctor</a>
            <a href="/user/signup">SignUp as User</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Front;
