import "./App.css";
import Headers from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/404/NotFound";
import Buykamas from "./Components/BuyKamas/Buykamas";
import SendKamas from "./Components/Vente-Kamas/SendKamas";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
     <Headers />
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achat" element={<Buykamas />} />
        <Route path="/vente" element={<SendKamas />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
