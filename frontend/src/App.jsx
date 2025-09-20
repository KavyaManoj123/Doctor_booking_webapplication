import { Routes, Route } from 'react-router-dom';
import DocSignUp from './pages/docter/signup';
import DocLogin from './pages/docter/login';
import DocProfile from './pages/docter/docHome';
import UserSignup from './pages/user/signup';
import UserLogin from './pages/user/login';
import UserHome from './pages/user/deplisting';
import UserDoc from './pages/user/docList';
import UserDocSlot from './pages/user/docProf';
import Appoint from './pages/user/userAppo';
import SlotAdd from './pages/docter/Slotadd';
import Front from './pages/Home/FrontRoute';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/doctor/signup" element={<DocSignUp />} />
        <Route path="/doctor/login" element={<DocLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/user/login" element={<UserLogin />} />

        <Route element={<PrivateRoute role="USER" path="/user/login" />}>
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/doctor/dep/:depId" element={<UserDoc />} />
          <Route path="/doctor/prof/:id" element={<UserDocSlot />} />
          <Route path="/user/appointments" element={<Appoint />} />
        </Route>

        <Route element={<PrivateRoute role="DOCTOR" path="/doctor/login" />}>
          <Route path="/doctor/profile" element={<DocProfile />} />
          <Route path="/doctor/slot" element={<SlotAdd />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
