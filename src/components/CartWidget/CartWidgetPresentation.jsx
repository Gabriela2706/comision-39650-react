import { NavbarPresentation } from "./../Navbar/NavbarPresentation";
export const CartWidgetPresentation = ({
  contador,
  sumarItem,
  restarItem,
  vaciarCarrito,
}) => {
  return (
    <div>
      <NavbarPresentation propCarrito={contador} />

      <button onClick={sumarItem}>Sumar al carrito</button>
      <button onClick={restarItem}>Restar del carrito</button>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  );
};
