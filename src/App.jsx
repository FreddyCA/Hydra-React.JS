import About from "./sections/About";
import Header from "./sections/Header";
import NavBar from "./sections/NavBar";
import Process from "./sections/Process";
import Services from "./sections/Services";
import Tech from "./sections/Tech";
import GlobalStyle from "./style/reset";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar></NavBar>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Tech></Tech>
      <Process></Process>
    </>
  );
};

export default App;
