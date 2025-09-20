import { jwtDecode } from 'jwt-decode';

export const getId = () => {
  const token = localStorage.getItem('token');
  const decode = jwtDecode(token);
  // console.log(decode);
  return decode.id;
};

export const isTokenValid = () => {
  const token = localStorage.getItem('token');
  try {
    const decode = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decode && decode.exp && decode.exp > currentTime) {
      return true;
    }
  } catch (e) {
    return false;
  }
};

export const checkRole = role => {
  const token = localStorage.getItem('token');
  // console.log(role, decode.role);
  try {
    const decode = jwtDecode(token);
    return role == decode.role;
  } catch (e) {
    return false;
  }
};
