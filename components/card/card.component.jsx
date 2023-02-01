import "./card.style.css";

const Card = ({ canavar }) => {
  const {id,name,email} = canavar
    return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size180x180`}
        alt={`canavar : ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
export default Card;
