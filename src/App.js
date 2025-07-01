import "./App.css";
import Card from "./Cards/Card";
import CardCounter from "./Counter/CardCounter";

function App() {
  const name1 = "UnitRent";
  return (
    <div className="App">
      <Card
        cardName={"UnitRent"}
        description={"For schools"}
        buttonName={name1}
      />
      <Card
        cardName={"WorkRent"}
        description={"For office"}
        buttonName={"WorkRent"}
      />
      <Card
        cardName={"CreatorRent"}
        description={"For gear"}
        buttonName={"CreatorRent"}
      />
      <CardCounter/>
    </div>
  );
}

export default App;
