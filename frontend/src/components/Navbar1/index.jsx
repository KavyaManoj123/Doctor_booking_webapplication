import { useNavigate } from 'react-router-dom';
import Modal from 'antd/es/modal/Modal';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Logo from '../logo'
import './style.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const appClick = () => {
    navigate('/user/appointments');
  };
  const onClick = () => {
    setIsOpen(true);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  const handleOk = () => {
    localStorage.removeItem('token');
    navigate('/user/login');
  };
  return (
    <div className="nav-bar">
      <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure</p>
      </Modal>
      <Logo size="2px"/>
      <div className="side-btn">
        <motion.button
          drag
          whileTap={{ scale: 1.1, backgroundColor: 'gray' }}
          onClick={appClick}
        >
          Appointments
        </motion.button>
        <p onClick={onClick}>Logout</p>
      </div>
    </div>
  );
};

export default Navbar;
