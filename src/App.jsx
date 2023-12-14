import About from "./sections/About";
import Header from "./sections/Header";
import NavBar from "./sections/NavBar";
import GlobalStyle from "./style/reset";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar></NavBar>
      <Header></Header>
      <About></About>
    </>
  );
};

export default App;
