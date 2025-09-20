import './style.css';

const Input = ({type='text',onChange,placeholder}) => {
  return (
    <div >
      <input className="custom-style" type={type} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default Input;
