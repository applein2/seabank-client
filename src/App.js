import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Inquiries from "./components/inquiries/inquiries";
import Information from "./components/information/Information";
import Products from "./components/products/Products";
import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import Board from "./components/board/Board";
import Register from "./components/login/Register";
import ReadBoard from "./components/board/ReadBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/information" element={<Information />} />
        <Route path="/inquiries" element={<Inquiries />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/board" element={<Board />} /> 
        <Route path="/readboard" element={<ReadBoard />} />
      </Route>
    </Routes>
  );
}

export default App
