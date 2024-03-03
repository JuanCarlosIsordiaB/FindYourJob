
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Details from "./pages/Details";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="add" element={<Form />} />
        <Route path="job/:id" element={<Details />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App