import { useState } from "react";
import { CartWidgetPresentation } from "./CartWidgetPresentation";

function CartWidgetContainer() {
  const [contador, setContador] = useState(0);
  const sumarItem = () => {
    setContador(contador + 1);
  };
  const restarItem = () => {
    setContador(contador - 1);
  };
  const vaciarCarrito = () => {
    setContador(0);
  };

  return (
    <div>
      <CartWidgetPresentation
        contador={contador}
        sumarItem={sumarItem}
        restarItem={restarItem}
        vaciarCarrito={vaciarCarrito}
      />
    </div>
  );
}

export default CartWidgetContainer;
