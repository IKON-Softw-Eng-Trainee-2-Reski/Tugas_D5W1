import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import HomePages from "./pages/HomePages";
import AboutPages from "./pages/AboutPages";
import TodoPages from "./pages/TodoPages";
import FormPages from "./pages/FormPages";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/todo" element={<TodoPages />} />
        <Route path="/form" element={<FormPages />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
