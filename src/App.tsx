import Header from "./components/header";

import "./app.css";
import Main from "./components/main";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Resize from "./components/resize";
import About from "./components/about";

const App = () => {
  return (
    <>
      <Header />

      <Main>
        <Hero />
        <About />
      </Main>

      <Footer />

      <Resize />
    </>
  );
};

export default App;
