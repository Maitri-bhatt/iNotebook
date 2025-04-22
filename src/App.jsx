import { BrowserRouter as Router, Route, Link, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <NoteState>
        {/* <Navbar /> */}
        <Alert message="This is amazing React course" />
        <div className="container"></div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Home /> */}
            <Route exact path="/about" element={<About />} />
            {/* <About /> */}
            <Route exact path="/login" element={<Login />} />
            {/* <Login /> */}
            <Route exact path="/signup" element={<Signup />} />
            {/* <Signup /> */}
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
