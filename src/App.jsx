import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portal from "./pages/Portal";
import Allobaby from "./pages/Allobaby";
import Allokonnect from "./pages/Allokonnect";

import SupportChatWidget from "./components/SupportChatWidget";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/allobaby" element={<Allobaby />} />
        <Route path="/allokonnect" element={<Allokonnect />} />
      </Routes>

      <SupportChatWidget />
    </BrowserRouter>
  );
}

export default App;