import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Success from "./pages/Success";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
   return (
    <>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/success" element={<Success />} />
      </Routes>

      
    </>
  );
}

