import estilos from "./Navbar.module.css";

export const NavbarPresentation = (prop) => {
  //Aca va la logica (JS) codigo contenedor

  return (
    //aca va el "HTML" (JSX) codigo presentacional
    <div className={estilos.navbarEstilos}>
      <ul className={estilos.navbarEstilos}>
        <li>Jeans</li>
        <li>Camperas</li>
        <li>Accesorios</li>
        <li>Liquidaciones</li>
      </ul>
      <ul>
        <li>{prop.propCarrito}</li>
      </ul>
    </div>
  );
};
