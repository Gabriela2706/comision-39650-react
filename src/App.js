import "./App.css";
import CartWidgetContainer from "./components/CartWidget/CartWidgetContainer";
import ItemList from "./components/ItemList/ItemList";

function App() {
  return (
    <div className="App">
      <CartWidgetContainer />
      <ItemList />
    </div>
  );
}

export default App;
