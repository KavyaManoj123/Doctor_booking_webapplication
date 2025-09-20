import './style.css';

const Card = props => {
  return (
    <div className="hos-card"onClick={props.onClick}>
      <img src={props.image} alt="" />
      <h1>{props.name}</h1>
      <h4>{props.description}</h4>
    </div>
  );
};
export default Card;
