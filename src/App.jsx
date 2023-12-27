import { useEffect, useState } from "react";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Form from "./sections/Form";
import Header from "./sections/Header";
import NavBar from "./sections/NavBar";
import Process from "./sections/Process";
import Services from "./sections/Services";
import Tech from "./sections/Tech";
import GlobalStyle from "./style/reset";

const App = () => {
  const [desktop, setDesktop] = useState(false);
  const [headerItems, setHeaderItems] = useState(false);

  const handleResize = () => {
    const newWidth = window.innerWidth;

    // Configurar el estado para la pantalla principal
    setDesktop(newWidth > 1020);

    // Configurar el estado para los elementos del encabezado
    setHeaderItems(newWidth > 870);
  };

  useEffect(() => {
    handleResize(); // Llamada inicial

    window.addEventListener("resize", handleResize);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      <NavBar desktop={desktop}></NavBar>
      <Header headerItems={headerItems}></Header>
      <About></About>
      <Services></Services>
      <Tech></Tech>
      <Process></Process>
      <Form></Form>
      <Footer></Footer>
    </>
  );
};

export default App;
