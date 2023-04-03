import "./App.css";

import { CartWidgetPresentation } from "./components/CartWidget/CartWidgetPresentation";
import ItemList from "./components/ItemList/ItemList";

function App() {
  let saludoCliente = "Hola! Bienvenidx a POLA SUR =)";

  return (
    <div className="App">
      <CartWidgetPresentation />
      <ItemList propItemList={saludoCliente} />
    </div>
  );
}

export default App;
