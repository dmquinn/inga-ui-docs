import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./Main";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth < 1124 ? setIsOpen(false) : setIsOpen(true);
    });
    console.log("here", isOpen);
  }, [isOpen]);
  return (
    <div className="App">
      <Header isOpen={isOpen} />
      <div className="row">
        <div className="col-md-2">
          <Sidebar isOpen={isOpen} />
        </div>
        <div className="col-md-10">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
