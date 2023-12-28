import Header from "./components/header";

import "./app.css";
import Main from "./components/main";
import Hero from "./components/hero";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header />

      <Main>
        <Hero />
      </Main>

      <Footer />
    </>
  );
};

export default App;
