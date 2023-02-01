import Card from "../card/card.component";
import "./card-list.style.css";

const CardList = ({ canavarlar }) => {
  return (
    <div className="card-list">
      {canavarlar.map((canavar) => {
        return <Card canavar={canavar} />;
      })}
    </div>
  );
};
export default CardList;
