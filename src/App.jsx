import { BrowserRouter as Router, Route, Link, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1599);
  };
  return (
    <>
      <NoteState>
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container">
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              {/* <Home  showAlert=(showAlert)/> */}
              <Route
                exact
                path="/about"
                element={<About showAlert={showAlert} />}
              />
              {/* <About /> */}
              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} />}
              />
              {/* <Login showAlert=(showAlert) /> */}
              <Route
                exact
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
              {/* <Signup showAlert=(showAlert)/> */}
            </Routes>
          </Router>
        </div>
      </NoteState>
    </>
  );
}

export default App;
