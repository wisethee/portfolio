import "./index.css";

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <main id="main" role="main" className="mp-main">
      {children}
    </main>
  );
};

export default Main;
