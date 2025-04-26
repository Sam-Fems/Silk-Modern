import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import CartDrawer from "./components/CartDrawer";

import Nike from "./pages/nike";
import Puma from "./pages/puma";
import Newbalance from "./pages/newbalance";
import Adidas from "./pages/adidas";
import Women from "./pages/Womens-page/stevewomen";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Navbar onCartClick={() => setIsCartOpen(true)} />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/nike" element={<Nike />} />
        <Route path="/puma" element={<Puma />} />
        <Route path="/newbalance" element={<Newbalance />} />
        <Route path="/adidas" element={<Adidas />} />
        <Route path="/stevewomen" element={<Women />} />
      </Routes>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default App;
