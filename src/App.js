// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [moder, setmoder] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
      value: 9,
    });

    setTimeout(() => {
      setalert(null);
    }, 1800);
  };

  const modetoggler = () => {
    if (moder === "light") {
      setmoder("dark");
      document.body.style.backgroundColor = "blue";

      showAlert("dark mode enabled", "success");
    } else {
      setmoder("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success");
    }
  };
  // modetoggler();

  return (
    <div>
      <Navbar
        title="Textutils"
        aboutText="About Textutils"
        mode={moder}
        toggle={modetoggler}
      />
      <Alert info={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter your text here"
                mode={moder}
                alertmaker={showAlert}
              />
            }
          />
          <Route exact path="/about" element={<About mode={moder} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
