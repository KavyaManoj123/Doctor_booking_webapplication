import { Navigate, Outlet } from 'react-router-dom';
import { isTokenValid, checkRole } from '../../utils/index2';

const PrivateRoute = ({ role, path }) => {
  if (isTokenValid() && checkRole(role)) {
    return <Outlet />;
  } else {
    return <Navigate to={path} />;
  }
};

export default PrivateRoute;
