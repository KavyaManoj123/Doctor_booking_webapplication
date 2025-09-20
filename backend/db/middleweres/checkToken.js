import jwt from 'jsonwebtoken';

export const checkToken = roleArray => {
  return (req, res, next) => {
    const bToken = req.headers.authorization;
    if (!bToken) {
      return res.status(403).json({ message: 'you are not authorized' });
    }
    // console.log(bToken)
    const token = bToken.replace('Bearer ', '');
    //   const token = bToken.split('')[1];

    try {
      const isValid = jwt.verify(token, 'NJHGFYVXGDHSJSWYUHJHDIEKUI');
      //   console.log(isValid);
      if (!roleArray.includes(isValid.role)) {
        return res.status(403).json({ message: 'you are not authorized' });
      }
    } catch (e) {
      return res.status(403).json({ message: 'you are not authorized' });
    }
    next();
  };
};
