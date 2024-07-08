import { useState } from "react";
import "./App.css";
import { values } from "./data";
import Portfolio from "./components/Portfolio";
import ButtonsBlock from "./components/ButtonBlock";

function App() {
  const arr = ["All", "Websites", "Flayers", "Business Cards"];
  const [tab, setTab] = useState("all");
  const [arrs, setArrs] = useState(values);

  function click(item) {
    setTab(item);
    if (item === "All") {
      setArrs(values);
    } else {
      setArrs(values.filter((el) => el.category === item));
    }
  }

  return (
    <div className="container">
      <div className="btn_box">
        <ButtonsBlock arr={arr} elem={tab} func={click} />
      </div>

      <Portfolio Arr={arrs} />
    </div>
  );
}

export default App;
