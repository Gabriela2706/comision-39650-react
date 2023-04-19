import ItemList from "./ItemList";
import { useState } from "react";

const ItemListContainer = () => {
  const [bienvenida, setBienvenida] = useState(
    "Hola! Si queres chusmear nuestra pagina... HACE CLICK ↓"
  );

  // function bienvenidaPrueba() {
  //   setBienvenida("BIENVENIDO! Gracias por interesarte en nosotros");
  // }

  const bienvenidaPrueba = () => {
    setBienvenida("BIENVENIDO! Gracias por interesarte en nosotros");
  };

  return (
    <div>
      <ItemList bienvenidaPrueba={bienvenidaPrueba} />
    </div>
  );
};

export default ItemListContainer;
