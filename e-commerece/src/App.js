import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import PurchasedItem from "./components/PurchasedItem";

function App() {
  return (
    <>
      <Header />
      <Hero />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="purchase" element={<PurchasedItem />} />
        </Routes>

      {/* <Header />
    <Hero />
    <Products /> */}
    </>
  );
}

export default App;
