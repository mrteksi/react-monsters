import { useState } from "react";
import SearchBar from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

const App = () => {
  const [aramaAlani, setAramaAlani] = useState("");
  const [canavarlar, setCanavarlar] = useState([]);
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((users) => setCanavarlar(users));
  const aramaDeğişikliği = (e) => {
    const aramaAlaniDizesi = e.target.value.toLocaleLowerCase();
    setAramaAlani(aramaAlaniDizesi);
  };
  const filtrelenmisCanavarlar = canavarlar.filter((canavar) =>
    canavar.name.toLocaleLowerCase().includes(aramaAlani)
  );
  return (
    <div className="App">
      <h1 className="app-title">Monsters</h1>
      <SearchBar
        placeholder={"Search..."}
        onChangeHandler={aramaDeğişikliği}
        className={"monsters search-box"}
      />
      <CardList canavarlar={filtrelenmisCanavarlar} />
    </div>
  );
};
export default App;
