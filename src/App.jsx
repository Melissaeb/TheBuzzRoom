import "./App.css";
import { Routes, Route } from "react-router-dom";

// Importing page components
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <NavBar />

      {/* Creating routes */}
      <Routes>
        {/* Route to homepage */}
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
