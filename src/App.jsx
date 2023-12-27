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

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (newWidth > 1020) {
        setDesktop(true);
      } else setDesktop(false);
    };
    handleResize()

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <NavBar desktop={desktop}></NavBar>
      <Header></Header>
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
