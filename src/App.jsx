import About from "./sections/About";
import Header from "./sections/Header";
import NavBar from "./sections/NavBar";
import Services from "./sections/Services";
import GlobalStyle from "./style/reset";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar></NavBar>
      <Header></Header>
      <About></About>
      <Services></Services>
    </>
  );
};

export default App;
